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
- **Prisma ORM**

### Database & Auth
- **Supabase PostgreSQL**
- **Supabase Auth**
- **NextAuth v5**

### Email & Scheduling
- **Resend** (Email service)
- **GitHub Actions** (Hourly cron jobs)

### Deployment
- **Vercel**

## 📋 Prerequisites

- Node.js 20+
- PostgreSQL database (Supabase recommended)
- Resend API key
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

Create a `.env` file in the root directory:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/dsa_reminder"
DIRECT_URL="postgresql://user:password@localhost:5432/dsa_reminder"

# Supabase
NEXT_PUBLIC_SUPABASE_URL="your-supabase-url"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-supabase-anon-key"
SUPABASE_SERVICE_ROLE_KEY="your-supabase-service-role-key"

# Resend
RESEND_API_KEY="your-resend-api-key"
EMAIL_FROM="noreply@yourdomain.com"

# NextAuth
NEXTAUTH_SECRET="your-nextauth-secret"
NEXTAUTH_URL="http://localhost:3000"

# Google OAuth (optional)
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# Cron Secret (optional, for GitHub Actions)
CRON_SECRET="your-cron-secret"
```

### 4. Set up the database

```bash
# Push the schema to your database
npm run db:push

# Seed the database with problems
npm run db:seed
```

### 5. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── app/                      # Next.js app directory
│   ├── api/                  # API routes
│   │   ├── auth/            # NextAuth endpoints
│   │   ├── send-reminders/  # Reminder scheduler
│   │   ├── settings/        # Settings API
│   │   ├── history/         # History API
│   │   ├── complete/        # Completion API
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
│   ├── prisma.ts            # Prisma client
│   ├── auth.ts              # NextAuth configuration
│   └── utils.ts             # Utility functions
├── repositories/            # Data access layer
│   ├── user-repository.ts
│   ├── problem-repository.ts
│   └── sent-problem-repository.ts
├── services/                # Business logic
│   ├── email-service.ts
│   └── reminder-service.ts
├── prisma/                  # Prisma files
│   ├── schema.prisma        # Database schema
│   └── seed.ts              # Database seed
├── scripts/                 # Utility scripts
│   └── send-reminders.ts    # Cron job script
├── .github/                 # GitHub workflows
│   └── workflows/
│       └── send-reminders.yml
└── types/                   # TypeScript types
    └── index.ts
```

## 🗄️ Database Schema

### User
- `id`: Unique identifier
- `email`: User email
- `password`: Hashed password (optional for OAuth users)
- `timezone`: User timezone
- `reminderTime`: Daily reminder time
- `frequencyDays`: DSA problem frequency
- `systemDesignFrequency`: System Design frequency
- `isActive`: Whether reminders are active
- `createdAt`: Account creation date
- `updatedAt`: Last update date

### Problem
- `id`: Unique identifier
- `title`: Problem title
- `difficulty`: EASY, MEDIUM, or HARD
- `topic`: Problem topic/category
- `companies`: List of companies asking this problem
- `leetcodeUrl`: LeetCode problem URL
- `solutionUrl`: Solution URL
- `youtubeUrl`: YouTube explanation URL
- `description`: Problem description (for System Design)
- `primaryUrl`: Primary reference URL (for System Design)
- `type`: DSA or SYSTEM_DESIGN
- `createdAt`: Creation date

### SentProblem
- `id`: Unique identifier
- `userId`: Reference to User
- `problemId`: Reference to Problem
- `sentAt`: When the problem was sent
- `opened`: Whether the user opened the email
- `completed`: Whether the user completed the problem

## 🔧 API Routes

### POST /api/send-reminders
Processes and sends daily reminders to all active users. Called by GitHub Actions hourly.

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

## ⏰ Scheduling

Reminders are sent hourly. On Vercel this is handled by **Vercel Cron Jobs** (configured in `vercel.json`, which calls `POST /api/send-reminders` every hour). A GitHub Actions workflow (`.github/workflows/send-reminders.yml`) is also included as an alternative for non-Vercel hosts. The job:

1. Checks all active users
2. Determines if it's their reminder time based on timezone
3. Checks if a problem was already sent today
4. Selects the next unseen DSA problem
5. Includes a System Design problem if configured frequency matches
6. Sends the email via Resend
7. Records the sent problem in the database

## 🗄️ Database: Supabase (PostgreSQL)

This project uses **Prisma** with **Supabase PostgreSQL** — Supabase is a managed Postgres instance, so no code changes are needed; you only point Prisma at your Supabase connection strings.

1. Create a project at [supabase.com](https://supabase.com).
2. In **Project Settings → Database**, copy two connection strings:
   - **Connection pooling** (Session mode, port `6543`) → use for `DATABASE_URL` (runtime, with `?pgbouncer=true&connection_limit=1`).
   - **Direct connection** (port `5432`) → use for `DIRECT_URL` (Prisma migrations/`db push`).
3. Set them in your `.env` (see `.env.example`) and in Vercel's environment variables.

> Why two URLs? Supabase's pooler is required for serverless runtime connections, but Prisma migrations need a direct (non-pooled) connection. The `directUrl` is declared in `prisma/schema.prisma`.

## 🚀 Deployment (Vercel + Supabase)

### 1. Provision the database

```bash
# Push the schema to your Supabase Postgres instance
npm run db:push

# Seed problems (DSA + System Design)
npm run db:seed
```

### 2. Deploy to Vercel

1. Push your code to GitHub.
2. Import the repository in [Vercel](https://vercel.com).
3. Add the environment variables below in the Vercel project settings.
4. Deploy. Vercel will run `npm run build` (which includes `prisma generate`) and register the hourly cron from `vercel.json`.

### Environment Variables (Vercel)

- `DATABASE_URL` — Supabase **pooled** connection string (port 6543, `?pgbouncer=true`)
- `DIRECT_URL` — Supabase **direct** connection string (port 5432)
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `RESEND_API_KEY`
- `EMAIL_FROM`
- `NEXTAUTH_SECRET`
- `NEXTAUTH_URL` — your Vercel deployment URL (e.g. `https://your-app.vercel.app`)
- `GOOGLE_CLIENT_ID` (optional)
- `GOOGLE_CLIENT_SECRET` (optional)
- `CRON_SECRET` (optional, but recommended — the cron job sends this as a `Bearer` token)

### GitHub Actions (alternative scheduler)

If you host elsewhere, the included workflow runs hourly. Add these repository secrets:

- `DATABASE_URL`, `DIRECT_URL`, `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`, `RESEND_API_KEY`, `EMAIL_FROM`, `NEXTAUTH_SECRET`, `NEXTAUTH_URL`, `CRON_SECRET`

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
- Environment variables for sensitive data
- Optional CRON_SECRET for GitHub Actions authentication

## 📝 License

MIT License - feel free to use this project for your own purposes.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Support

For issues or questions, please open an issue on GitHub.

---

Built with ❤️ using Next.js, Prisma, and Supabase