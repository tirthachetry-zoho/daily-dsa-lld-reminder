-- ============================================================
-- Apply in the Supabase SQL Editor (Dashboard -> SQL Editor -> New query)
-- Fixes BOTH:
--  1) net.http_post now sends Authorization: Bearer <CRON_SECRET>
--     (the route enforces CRON_SECRET, so the old unauthenticated
--      call was getting 401 Unauthorized).
--  2) reminder_time is converted from the user's LOCAL timezone to
--     UTC before scheduling, because pg_cron runs in the DB server's
--     timezone (UTC). Without this, a user in Asia/Kolkata with
--     reminder_time '15:37' fired at 15:37 UTC = 21:07 IST.
-- ============================================================

-- 1) Store the cron secret (must match the app's CRON_SECRET env var)
insert into public.app_config (key, value)
values ('cron_secret', 'vercel-tirtha-cron-secret')
on conflict (key) do update set value = excluded.value;

-- 2) Helper to read the cron secret
create or replace function public.get_cron_secret()
returns text
language sql
security definer
as $$
  select coalesce(value, '') from public.app_config where key = 'cron_secret';
$$;

-- 3) Recreate schedule_user_reminder with the FIXED net.http_post call
--    AND timezone-aware (local -> UTC) scheduling.
create or replace function public.schedule_user_reminder(p_user_id uuid)
returns void
language plpgsql
security definer
set search_path = public, cron, pg_catalog
as $function$
declare
  v_reminder_time text;
  v_timezone text;
  v_job_name text := 'send_reminder_' || p_user_id::text;
  v_schedule text;
  v_payload jsonb;
  v_endpoint text;
  v_cron_secret text;
  v_headers jsonb;
  v_command text;
  v_utc_time text;
begin
  select u.reminder_time, u.timezone
    into v_reminder_time, v_timezone
    from public.dsa_users u
   where u.id = p_user_id;

  if v_reminder_time is null then
    return;
  end if;

  -- Convert the user's LOCAL reminder_time to the equivalent UTC time,
  -- since pg_cron schedules in the DB server's timezone (UTC).
  begin
    select to_char(
      (current_date::timestamp + v_reminder_time::time)
        at time zone v_timezone
        at time zone 'UTC',
      'HH24:MI'
    ) into v_utc_time;
  exception when others then
    v_utc_time := v_reminder_time;
  end;

  if v_utc_time is null or v_utc_time = '' then
    v_utc_time := v_reminder_time;
  end if;

  v_schedule := public.cron_schedule_for(v_utc_time);
  v_endpoint := public.get_api_base_url();
  v_payload := jsonb_build_object('userId', p_user_id::text);
  v_cron_secret := public.get_cron_secret();

  begin
    perform cron.unschedule(v_job_name);
  exception when others then
    null;
  end;

  v_headers := jsonb_build_object('Content-Type', 'application/json');
  if v_cron_secret <> '' then
    v_headers := v_headers || jsonb_build_object(
      'Authorization', 'Bearer ' || v_cron_secret
    );
  end if;

  v_command := format(
    'select net.http_post(%L, %L::jsonb, NULL::jsonb, %L::jsonb)',
    v_endpoint || '/api/send-reminders',
    v_payload,
    v_headers
  );

  perform cron.schedule(v_job_name, v_schedule, v_command);
end;
$function$;

-- 4) Re-sync the test user's cron job so it picks up the fixed command now.
select public.schedule_user_reminder('6bca24c4-ea1e-47c6-aee1-9a1ab1ae2338');