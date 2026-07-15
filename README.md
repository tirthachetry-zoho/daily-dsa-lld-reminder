# DSA Reminder

A production-ready SaaS web application that delivers daily DSA (Data Structures & Algorithms) and System Design problems to help developers prepare for technical interviews.

## 🚀 Features

- **Daily Email Reminders**: Receive curated LeetCode problems at your preferred time
- **System Design Questions**: Regular system design problems to round out your preparation
- **Customizable Schedule**: Set reminder time, timezone, and frequency
- **Progress Tracking**: Monitor streak, completion rate, and problem history
- **Beautiful UI**: Modern dashboard built with Next.js 15 and shadcn/ui
- **Email Preview**: Test email templates before sending
- **Pause/Resume**: Control when you receive reminders

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui**
- **Lucide Icons**

### Backend
- **Next.js API Routes**
- **Server Actions**

### Database & Auth
- **Supabase PostgreSQL** (via `@supabase/supabase-js`)
- **NextAuth v5** (email/password + Google OAuth)

### Email & Scheduling
- **Brevo** (Email service)
- **pg_cron** (in-database scheduling on Supabase)

### Deployment
- **Vercel**

## 📋 Prerequisites

- Node.js 20+
- A **Supabase** project (PostgreSQL + pg_cron enabled)
- A **Brevo** API key
- Google OAuth credentials (optional, for Google login)

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd daily-dsa-lld-reminder
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory (see `.env.example`):

```env
# Supabase (PostgreSQL + Auth)
NEXT_PUBLIC_SUPABASE_URL="https://<your-ref>.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-supabase-anon-key"
SUPABASE_SERVICE_ROLE_KEY="your-supabase-service-role-key"

# Public base URL — used by pg_cron to call the send-reminders API.
# Set this to your deployed URL (e.g. https://your-app.vercel.app) in production.
API_BASE_URL="http://localhost:3000"

# Brevo (email sending)
BREVO_API_KEY="your-brevo-api-key"
# Must be a verified sender domain, e.g. "noreply@yourdomain.com"
EMAIL_FROM="noreply@yourdomain.com"

# NextAuth
NEXTAUTH_SECRET="your-nextauth-secret"
NEXTAUTH_URL="http://localhost:3000"

# Google OAuth (optional)
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# Cron Secret (optional, sent as "Authorization: Bearer <CRON_SECRET>" to /api/send-reminders)
CRON_SECRET="your-cron-secret"
```

### 4. Create the database schema

The app uses the **Supabase JS client** (no Prisma). Apply the schema + pg_cron scheduling by running the SQL in
[`supabase/migrations/0001_init.sql`](supabase/migrations/0001_init.sql) in the **Supabase SQL Editor**
(Project → SQL → New query → paste → Run).

This creates the `dsa_users`, `dsa_problems`, and `dsa_sent_problems` tables, enables Row Level Security, and installs the
`pg_cron` functions/triggers that automatically schedule a per-user reminder job whenever a user is created or
updates their `reminder_time` / `is_active`.

> **Important:** After running the migration, set the `api_base_url` setting used by pg_cron (so the cron job knows
> where to call your API). In the SQL editor run:
> ```sql
> alter database postgres set app.settings.api_base_url = 'http://localhost:3000';
> ```
> (Use your production URL in deployment.)

### 5. Seed the problems

```bash
npm run db:seed
```

This loads the DSA and System Design problems from `data/` into the `problems` table.

### 6. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🌐 How to Get Every Environment Variable

### From Supabase (database + keys)
1. Create a project at [supabase.com](https://supabase.com).
2. **Project Settings → API**:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL` (e.g. `https://<ref>.supabase.co`).
   - **`anon` `public` key** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
   - **`service_role` key** → `SUPABASE_SERVICE_ROLE_KEY` (keep secret; never expose to the client).
3. **Database → Extensions**: enable **`pg_cron`** (and `pgcrypto`, which the migration enables automatically).

### From Brevo (email sending)
1. Sign up at [brevo.com](https://www.brevo.com) → **API Keys → Create API Key** → `BREVO_API_KEY`.
2. **Senders → Senders & Domains** and verify your sender domain (e.g. `yourdomain.com`).
3. Set `EMAIL_FROM` to an address on that domain, e.g. `noreply@yourdomain.com`.

### From NextAuth (sessions)
- `NEXTAUTH_SECRET`: generate with `openssl rand -base64 32`.
- `NEXTAUTH_URL`: the app origin — `http://localhost:3000` for local dev, your Vercel URL in production.

### From Google Cloud (optional — Google login)
1. [Google Cloud Console → APIs & Services → Credentials](https://console.cloud.google.com/apis/credentials).
2. **Create Credentials → OAuth client ID** (Application type: Web application).
3. Add authorized redirect URI: `https://<your-domain>/api/auth/callback/google`.
4. Copy **Client ID** → `GOOGLE_CLIENT_ID` and **Client Secret** → `GOOGLE_CLIENT_SECRET`.

### CRON_SECRET (optional — secures the reminder endpoint)
- Any random string, e.g. `openssl rand -base64 24`. The pg_cron job (or a manual call) sends it as a `Bearer` token.

## 📁 Project Structure

```
├── app/                      # Next.js app directory
│   ├── api/                  # API routes
│   │   ├── auth/            # NextAuth endpoints
│   │   ├── send-reminders/  # Reminder scheduler (called by pg_cron)
│   │   ├── settings/        # Settings API
│   │   ├── history/         # History API
│   │   ├── complete/        # Completion API
│   │   ├── register/        # Registration API
│   │   └── send-preview/    # Email preview API
│   ├── dashboard/           # Dashboard pages
│   │   ├── settings/        # Settings page
│   │   ├── history/         # History page
│   │   └── email-preview/   # Email preview page
│   ├── login/               # Login page
│   ├── register/            # Register page
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Landing page
│   └── globals.css          # Global styles
├── components/               # React components
│   ├── ui/                  # shadcn/ui components
│   └── dashboard-sidebar.tsx # Dashboard sidebar
├── data/                    # Problem datasets
│   ├── dsaProblems.ts       # DSA problems
│   └── systemDesignProblems.ts # System Design problems
├── lib/                     # Utility functions
│   ├── supabase.ts          # Supabase client
│   ├── auth.ts              # NextAuth configuration
│   └── utils.ts             # Utility functions
├── repositories/            # Data access layer (Supabase JS)
│   ├── user-repository.ts
│   ├── problem-repository.ts
│   └── sent-problem-repository.ts
├── services/                # Business logic
│   ├── email-service.ts
│   └── reminder-service.ts
├── scripts/                 # Utility scripts
│   ├── seed.ts              # Database seed
│   └── send-reminders.ts    # Manual reminder runner
├── supabase/
│   └── migrations/
│       └── 0001_init.sql    # Schema + pg_cron scheduling
├── types/                   # TypeScript types
│   └── index.ts
└── vercel.json              # Vercel project config
```

## 🗄️ Database Schema

Tables live in the `public` schema of your Supabase project.

### dsa_users
- `id`: uuid (PK)
- `email`: text (unique)
- `password`: text (hashed, optional for OAuth users)
- `timezone`: text
- `reminder_time`: text (e.g. `"09:00"`)
- `frequency_days`: int (DSA problem frequency)
- `system_design_frequency`: int
- `is_active`: boolean
- `created_at`, `updated_at`: timestamptz

### dsa_problems
- `id`: text (PK, slug of title)
- `title`: text
- `difficulty`: `EASY` | `MEDIUM` | `HARD`
- `topic`: text
- `companies`: text[]
- `leetcode_url`, `solution_url`, `youtube_url`: text
- `description`, `primary_url`: text (System Design)
- `type`: `DSA` | `SYSTEM_DESIGN`
- `created_at`: timestamptz

### dsa_sent_problems
- `id`: uuid (PK)
- `user_id`: uuid → `dsa_users.id`
- `problem_id`: text → `dsa_problems.id`
- `sent_at`: timestamptz
- `opened`: boolean
- `completed`: boolean

## 🔧 API Routes

### POST /api/send-reminders
Sends the daily reminder to a single user (expects `{ "userId": "<uuid>" }` in the body). Secured by `CRON_SECRET`
(optional). Called automatically by the per-user **pg_cron** job installed by the migration.

### POST /api/register
Create a new user (email + password). Also schedules their pg_cron reminder job.

### POST /api/settings
Update user settings (reminder time, timezone, frequency, etc.)

### GET /api/settings
Get current user settings

### GET /api/history
Get user's problem history

### POST /api/complete
Mark a problem as completed

### POST /api/send-preview
Send a preview email to test the email template

## 📧 Email Template

The daily reminder email includes:
- **Header**: "🚀 Daily Coding Reminder"
- **DSA Problem Section**:
  - Title
  - Difficulty badge
  - Topic
  - Companies
  - Action buttons (Solve, View Solution, Watch Video)
- **System Design Section** (if applicable):
  - Title
  - Description
  - Reference link
  - Video link
- **Footer**: "Happy Coding! 🎉"

## ⏰ Scheduling (pg_cron)

Scheduling is handled **inside the database** with `pg_cron` (no external cron host needed):

1. When a user registers or updates `reminder_time` / `is_active`, a Postgres **trigger** calls
   `schedule_user_reminder(user_id)`.
2. That function creates a dedicated cron job `send_reminder_<user_id>` that fires at the user's `reminder_time`
   (in the server's timezone) and invokes `supabase_functions.http_request` against
   `POST <API_BASE_URL>/api/send-reminders` with `{ "userId": "..." }`.
3. The API route selects the next unseen DSA problem (and a System Design problem per the configured frequency),
   sends the email via Brevo, and records it in `sent_problems`.

> The `API_BASE_URL` is read from the `app.settings.api_base_url` database setting (set it after the migration, as
> shown in step 4 above). In production point it at your Vercel URL.

You can also trigger reminders manually:

```bash
npm run send-reminders   # processes reminders for all users due now
```

## 🚀 Deployment (Vercel + Supabase)

### 1. Apply the schema
Run [`supabase/migrations/0001_init.sql`](supabase/migrations/0001_init.sql) in the **production** Supabase SQL
editor, then set the production `api_base_url`:
```sql
alter database postgres set app.settings.api_base_url = 'https://your-app.vercel.app';
```

### 2. Seed the problems
```bash
API_BASE_URL="https://your-app.vercel.app" npm run db:seed
```

### 3. Deploy to Vercel
1. Push your code to GitHub.
2. Import the repository in [Vercel](https://vercel.com).
3. Add the environment variables below in the Vercel project settings.
4. Deploy. Vercel runs `npm run build` and serves the app.

### Environment Variables (Vercel)
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `API_BASE_URL` — your Vercel deployment URL (e.g. `https://your-app.vercel.app`)
- `BREVO_API_KEY`
- `EMAIL_FROM`
- `NEXTAUTH_SECRET`
- `NEXTAUTH_URL` — your Vercel deployment URL
- `GOOGLE_CLIENT_ID` (optional)
- `GOOGLE_CLIENT_SECRET` (optional)
- `CRON_SECRET` (optional, but recommended)

## 🧪 Testing

### Run the reminder script manually
```bash
npm run send-reminders
```

### Send a test email
Use the Email Preview page in the dashboard to send a test email to yourself.

### Seed the database
```bash
npm run db:seed
```

## 🎨 Customization

### Adding New Problems
Edit the files in the `data/` directory:
- `data/dsaProblems.ts` - Add DSA problems
- `data/systemDesignProblems.ts` - Add System Design problems

Then run the seed script:
```bash
npm run db:seed
```

### Modifying Email Template
Edit the `generateEmailHtml` method in:
- `services/email-service.ts` - Service layer
- `app/api/send-reminders/route.ts` - API route
- `app/api/send-preview/route.ts` - Preview route

## 🔐 Security

- Passwords are hashed using bcrypt
- NextAuth handles session management
- The app uses the Supabase **service role** key server-side (bypasses RLS)
- Environment variables for sensitive data
- Optional `CRON_SECRET` for `/api/send-reminders` authentication

## 📝 License

MIT License - feel free to use this project for your own purposes.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Support

For issues or questions, please open an issue on GitHub.

---

Built with ❤️ using Next.js, Supabase, and Brevo