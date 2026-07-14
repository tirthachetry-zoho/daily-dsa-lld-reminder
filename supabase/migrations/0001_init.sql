-- ============================================================
-- DSA Reminder — Supabase schema + pg_cron scheduling
-- Run this in the Supabase SQL editor (or via Supabase CLI migrations).
-- Requires the `pg_cron` and `pg_net` (or supabase_functions) extensions
-- enabled on your Supabase project.
--
-- Table/column names match the Supabase JS client references used
-- throughout the app (repositories/*): lowercase snake_case.
-- ============================================================

-- Extensions
create extension if not exists "pgcrypto";   -- for gen_random_uuid()
create extension if not exists "pg_cron";     -- scheduled jobs

-- Allow the app's service_role (and postgres) to manage cron jobs.
-- Without USAGE on the cron schema, calls from service_role fail with
-- "42501: permission denied for schema cron".
grant usage on schema cron to postgres, service_role;
grant execute on all functions in schema cron to postgres, service_role;

-- ------------------------------------------------------------
-- Tables
-- ------------------------------------------------------------
create table if not exists public.dsa_users (
  id                    uuid primary key default gen_random_uuid(),
  email                 text unique not null,
  password              text,
  timezone              text not null default 'UTC',
  reminder_time         text not null default '09:00',
  frequency_days        int  not null default 1,
  system_design_frequency int not null default 3,
  is_active             boolean not null default true,
  created_at           timestamptz not null default now(),
  updated_at           timestamptz not null default now()
);

create table if not exists public.dsa_problems (
  id              text primary key,
  title           text not null,
  difficulty      text not null check (difficulty in ('EASY','MEDIUM','HARD')),
  topic           text not null,
  companies       text[] not null default '{}',
  leetcode_url    text,
  solution_url    text,
  youtube_url     text,
  description     text,
  primary_url     text,
  type            text not null default 'DSA' check (type in ('DSA','SYSTEM_DESIGN')),
  created_at      timestamptz not null default now()
);

create table if not exists public.dsa_sent_problems (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null references public.dsa_users(id) on delete cascade,
  problem_id  text not null references public.dsa_problems(id),
  sent_at     timestamptz not null default now(),
  opened      boolean not null default false,
  completed   boolean not null default false,
  unique (user_id, problem_id, sent_at)
);

create index if not exists idx_sent_problems_user on public.dsa_sent_problems(user_id);
create index if not exists idx_problems_type on public.dsa_problems(type);

-- ------------------------------------------------------------
-- Row Level Security (RLS)
-- The app uses the SERVICE ROLE key server-side (bypasses RLS),
-- so these policies are for safety if the anon key is ever used.
-- ------------------------------------------------------------
alter table public.dsa_users enable row level security;
alter table public.dsa_problems enable row level security;
alter table public.dsa_sent_problems enable row level security;

-- Allow anonymous read of problems (so the app can show previews)
drop policy if exists "dsa_problems readable by all" on public.dsa_problems;
create policy "dsa_problems readable by all" on public.dsa_problems
  for select using (true);

-- ------------------------------------------------------------
-- pg_cron scheduling
-- Each user gets a dedicated cron job that fires at their
-- reminder_time and calls our API endpoint for that user.
-- ------------------------------------------------------------

-- Function: build a cron schedule string from "HH:MM"
create or replace function public.cron_schedule_for(reminder_time text)
returns text
language sql
as $$
  select format('%s %s * * *', split_part(reminder_time, ':', 2), split_part(reminder_time, ':', 1));
$$;

-- Function: (re)create a per-user cron job
-- NOTE: the function body uses a tagged dollar-quote ($function$ ...) so the
-- inner format() string (single-quoted) does not clash with the outer $$.
-- We use the ":=" assignment form (not SELECT ... INTO) to avoid PL/pgSQL
-- mis-parsing the target as a relation (ERROR 42P01).
-- SECURITY DEFINER lets the function run as its owner (which has cron
-- privileges) so the app's service_role can schedule jobs without
-- "permission denied for schema cron" (ERROR 42501).
create or replace function public.schedule_user_reminder(p_user_id uuid)
returns void
language plpgsql
security definer
set search_path = public, cron, pg_catalog
as $function$
declare
  v_reminder_time text;
  v_job_name text := 'send_reminder_' || p_user_id::text;
  v_schedule text;
  v_payload jsonb;
  v_endpoint text;
  v_command text;
begin
  v_reminder_time := (
    select u.reminder_time
    from public.dsa_users u
    where u.id = p_user_id
  );
  if v_reminder_time is null then
    return;
  end if;

  v_schedule := public.cron_schedule_for(v_reminder_time);
  v_endpoint := coalesce(current_setting('app.settings.api_base_url', true), 'http://localhost:3000');
  v_payload := jsonb_build_object('userId', p_user_id::text);

  -- Remove any existing job for this user (ignore if it doesn't exist yet).
  -- cron.unschedule() raises XX000 "could not find valid entry for job"
  -- when the job is absent, so we swallow that on first creation.
  begin
    perform cron.unschedule(v_job_name);
  exception when others then
    null;
  end;

  v_command := format(
    'select supabase_functions.http_request(%L, %L, %L::jsonb, %L::jsonb, %L::jsonb)',
    v_endpoint || '/api/send-reminders',
    'POST',
    '{"Content-Type":"application/json"}',
    v_payload::text,
    '{}'
  );

  perform cron.schedule(v_job_name, v_schedule, v_command);
end;
$function$;

-- Function: remove a user's cron job
create or replace function public.unschedule_user_reminder(p_user_id uuid)
returns void
language plpgsql
security definer
set search_path = public, cron, pg_catalog
as $$
begin
  perform cron.unschedule('send_reminder_' || p_user_id::text);
end;
$$;

-- Trigger: keep the cron job in sync with reminder_time / is_active
create or replace function public.sync_user_cron()
returns trigger
language plpgsql
security definer
set search_path = public, cron, pg_catalog
as $$
begin
  if (TG_OP = 'INSERT' or NEW.reminder_time <> OLD.reminder_time or NEW.is_active <> OLD.is_active) then
    if NEW.is_active then
      perform public.schedule_user_reminder(NEW.id);
    else
      perform public.unschedule_user_reminder(NEW.id);
    end if;
  end if;
  return NEW;
end;
$$;

drop trigger if exists trg_sync_user_cron on public.dsa_users;
create trigger trg_sync_user_cron
  after insert or update on public.dsa_users
  for each row execute function public.sync_user_cron();

-- When a user is deleted, clean up their cron job
create or replace function public.cleanup_user_cron()
returns trigger
language plpgsql
security definer
set search_path = public, cron, pg_catalog
as $$
begin
  perform public.unschedule_user_reminder(OLD.id);
  return OLD;
end;
$$;

drop trigger if exists trg_cleanup_user_cron on public.dsa_users;
create trigger trg_cleanup_user_cron
  after delete on public.dsa_users
  for each row execute function public.cleanup_user_cron();