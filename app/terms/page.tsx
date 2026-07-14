import Link from "next/link";

export const metadata = {
  title: "Terms of Service · DSA Reminder",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-8">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-blue-600 hover:underline mb-4"
        >
          ← Home
        </Link>
        <h1 className="text-3xl font-bold text-blue-600 mb-2">Terms of Service</h1>
        <p className="text-sm text-gray-500 mb-6">Last updated: 2026</p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
          <p className="text-gray-700">
            By using DSA Reminder, you agree to these terms. The service is
            provided &ldquo;as is&rdquo; for educational and interview-preparation
            purposes.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">2. Use of Service</h2>
          <p className="text-gray-700">
            You may use the service to receive daily coding problems. You agree
            not to abuse, reverse-engineer, or attempt to disrupt the service or
            its infrastructure.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">3. Problem Content</h2>
          <p className="text-gray-700">
            Problem links point to third-party resources (e.g. LeetCode,
            open-source repositories). We do not own that content and are not
            responsible for its accuracy or availability.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">4. Termination</h2>
          <p className="text-gray-700">
            You may stop using the service at any time by unsubscribing. We may
            suspend accounts that violate these terms.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">5. Limitation of Liability</h2>
          <p className="text-gray-700">
            DSA Reminder is provided without warranty. We are not liable for any
            outcomes related to your interview preparation or use of linked
            third-party content.
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