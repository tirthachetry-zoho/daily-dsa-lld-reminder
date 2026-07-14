"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";

type VerifyState = "idle" | "checking" | "valid" | "invalid";
type LookupState =
  | { status: "none" }
  | { status: "loading" }
  | { status: "registered"; config: Record<string, unknown> }
  | { status: "not-registered" }
  | { status: "error"; message: string };

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [verify, setVerify] = useState<VerifyState>("idle");
  const [verifyReason, setVerifyReason] = useState<string>("");
  const [lookup, setLookup] = useState<LookupState>({ status: "none" });
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Instantly verify the email (format + domain/MX) as the user types.
  const handleEmailChange = (value: string) => {
    setEmail(value);
    setLookup({ status: "none" });
    if (debounceRef.current) clearTimeout(debounceRef.current);

    const trimmed = value.trim();
    if (!trimmed) {
      setVerify("idle");
      setVerifyReason("");
      return;
    }

    setVerify("checking");
    debounceRef.current = setTimeout(async () => {
      try {
        const res = await fetch("/api/verify-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: trimmed }),
        });
        const data = await res.json();
        if (data.valid) {
          setVerify("valid");
          setVerifyReason("");
        } else {
          setVerify("invalid");
          setVerifyReason(data.reason || "Email could not be verified");
        }
      } catch {
        setVerify("invalid");
        setVerifyReason("Could not verify the email");
      }
    }, 500);
  };

  // Look up the email to see if it's already registered (and show config).
  const handleLookup = async () => {
    const trimmed = email.trim().toLowerCase();
    if (verify !== "valid") {
      toast({
        title: "Error",
        description: verifyReason || "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setLookup({ status: "loading" });
    try {
      const res = await fetch("/api/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed }),
      });
      const data = await res.json();
      if (res.ok && data.registered) {
        setLookup({ status: "registered", config: data.config });
      } else if (res.ok && !data.registered) {
        setLookup({ status: "not-registered" });
      } else {
        setLookup({ status: "error", message: data.error || "Lookup failed" });
      }
    } catch {
      setLookup({ status: "error", message: "Something went wrong" });
    }
  };

  const handleRegister = async () => {
    if (verify !== "valid") {
      toast({
        title: "Error",
        description: verifyReason || "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        toast({
          title: "Success",
          description: "Account created. Redirecting to your dashboard...",
        });
        router.push("/dashboard");
        router.refresh();
      } else {
        const data = await response.json();
        toast({
          title: "Error",
          description: data.error || "Failed to create account",
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "Error",
        description: "Something went wrong",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleUnregister = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/user", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim().toLowerCase() }),
      });
      if (response.ok) {
        toast({ title: "Success", description: "You have been unregistered." });
        setLookup({ status: "not-registered" });
      } else {
        const data = await response.json();
        toast({
          title: "Error",
          description: data.error || "Failed to unregister",
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "Error",
        description: "Something went wrong",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl">Get Started</CardTitle>
          <CardDescription>
            Enter your email and we'll set up daily DSA reminders
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => handleEmailChange(e.target.value)}
                required
              />
              {verify === "checking" && (
                <p className="text-xs text-muted-foreground">Checking email...</p>
              )}
              {verify === "valid" && (
                <p className="text-xs text-green-600">
                  ✓ Valid email — domain verified
                </p>
              )}
              {verify === "invalid" && (
                <p className="text-xs text-red-600">{verifyReason}</p>
              )}
            </div>

            {lookup.status === "loading" && (
              <p className="text-xs text-muted-foreground">Looking up account...</p>
            )}

            {lookup.status === "registered" && (
              <div className="rounded-md border border-blue-200 bg-blue-50 dark:bg-blue-950/40 p-3 text-sm space-y-1">
                <p className="font-medium">This email is already registered.</p>
                <p>Reminder time: {(lookup.config as any).reminderTime}</p>
                <p>Timezone: {(lookup.config as any).timezone}</p>
                <p>
                  DSA every {(lookup.config as any).frequencyDays} day(s) · System
                  Design every {(lookup.config as any).systemDesignFrequency} day(s)
                </p>
                <p>
                  Status: {(lookup.config as any).isActive ? "Active" : "Paused"}
                </p>
                <Button
                  type="button"
                  variant="destructive"
                  size="sm"
                  className="mt-2"
                  onClick={handleUnregister}
                  disabled={isLoading}
                >
                  {isLoading ? "Removing..." : "Unregister this email"}
                </Button>
              </div>
            )}

            {lookup.status === "not-registered" && (
              <div className="rounded-md border border-green-200 bg-green-50 dark:bg-green-950/40 p-3 text-sm">
                <p className="font-medium">Not registered yet.</p>
                <p>Continue to create your reminder config.</p>
              </div>
            )}

            {lookup.status === "error" && (
              <p className="text-xs text-red-600">{lookup.message}</p>
            )}

            <div className="flex gap-2">
              <Button
                type="button"
                variant="outline"
                className="flex-1"
                onClick={handleLookup}
                disabled={verify !== "valid" || isLoading}
              >
                Check account
              </Button>
              <Button
                type="button"
                className="flex-1"
                onClick={handleRegister}
                disabled={verify !== "valid" || isLoading || lookup.status === "registered"}
              >
                {isLoading ? "Working..." : "Register"}
              </Button>
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Already have an account?{" "}
            <Link href="/dashboard" className="text-primary hover:underline">
              Go to dashboard
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}