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

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [verify, setVerify] = useState<VerifyState>("idle");
  const [verifyReason, setVerifyReason] = useState<string>("");
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Instantly verify the email (format + domain/MX) as the user types.
  const handleEmailChange = (value: string) => {
    setEmail(value);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
          <form onSubmit={handleSubmit} className="space-y-4">
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
            <Button
              type="submit"
              className="w-full"
              disabled={isLoading || verify !== "valid"}
            >
              {isLoading ? "Creating account..." : "Continue"}
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Already have an account?{" "}
            <Link href="/login" className="text-primary hover:underline">
              Sign in
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}