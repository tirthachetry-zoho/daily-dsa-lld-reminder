"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function UnsubscribeContent() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email") ?? "";
  const [status, setStatus] = useState<"loading" | "done" | "error">("loading");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!email) {
      setStatus("error");
      setMessage("Missing email address.");
      return;
    }

    fetch("/api/unsubscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    })
      .then(async (res) => {
        const data = await res.json();
        if (res.ok) {
          setStatus("done");
          setMessage("You have been unsubscribed. You will no longer receive daily reminders.");
        } else {
          setStatus("error");
          setMessage(data.error ?? "Something went wrong.");
        }
      })
      .catch(() => {
        setStatus("error");
        setMessage("Network error. Please try again.");
      });
  }, [email]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow p-8 text-center">
        <h1 className="text-2xl font-bold text-blue-600 mb-4">DSA Reminder</h1>
        {status === "loading" && (
          <p className="text-gray-600">Processing your request…</p>
        )}
        {status === "done" && (
          <>
            <p className="text-green-600 font-medium mb-4">{message}</p>
            <p className="text-sm text-gray-500 mb-4">
              Changed your mind?{" "}
              <Link href="/register" className="text-blue-600 underline">
                Resubscribe here
              </Link>
              .
            </p>
          </>
        )}
        {status === "error" && (
          <p className="text-red-600">{message}</p>
        )}
        <Link href="/" className="text-sm text-blue-600 underline mt-4 inline-block">
          Back to home
        </Link>
      </div>
    </div>
  );
}

export default function UnsubscribePage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-gray-600">Loading…</div>}>
      <UnsubscribeContent />
    </Suspense>
  );
}
