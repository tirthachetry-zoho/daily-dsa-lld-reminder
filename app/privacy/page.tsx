export const metadata = {
  title: "Privacy Policy · DSA Reminder",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-6">Last updated: 2026</p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
          <p className="text-gray-700">
            We collect only the information needed to send you daily coding
            reminders: your email address, your preferred reminder time,
            timezone, and problem-frequency preferences. We do not collect
            payment information or sensitive personal data.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">2. How We Use Your Data</h2>
          <p className="text-gray-700">
            Your email and schedule are used solely to deliver the daily DSA and
            System Design problems you signed up for. We never sell or share
            your data with third parties for marketing.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">3. Email Communications</h2>
          <p className="text-gray-700">
            You will receive reminder emails based on your settings. Every email
            includes an unsubscribe link, and you can pause or delete your
            account at any time from the dashboard.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">4. Data Retention & Deletion</h2>
          <p className="text-gray-700">
            You may request deletion of your account and associated data at any
            time via the dashboard or by unsubscribing. We will remove your
            record promptly.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">5. Contact</h2>
          <p className="text-gray-700">
            Questions about this policy? Reach out via{" "}
            <a
              href="https://www.linkedin.com/in/tirthachetry/"
              className="text-blue-600 underline"
            >
              LinkedIn
            </a>
            .
          </p>
        </section>

        <p className="text-sm text-gray-500 mt-8">
          © 2026 DSA Reminder · Built by{" "}
          <a
            href="https://www.linkedin.com/in/tirthachetry/"
            className="text-blue-600 underline"
          >
            Tirtha
          </a>
        </p>
      </div>
    </div>
  );
}