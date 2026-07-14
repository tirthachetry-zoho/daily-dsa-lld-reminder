"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { Mail, Send } from "lucide-react";

export default function EmailPreviewPage() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendPreview = async () => {
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter an email address",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/send-preview", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        toast({
          title: "Success",
          description: "Preview email sent successfully",
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to send preview email",
          variant: "destructive",
        });
      }
    } catch (error) {
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
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Email Preview
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Preview and test the daily reminder email template
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            Send Test Email
          </CardTitle>
          <CardDescription>
            Send a preview of the daily reminder email to yourself
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <Button onClick={handleSendPreview} disabled={isLoading}>
              <Send className="h-4 w-4 mr-2" />
              {isLoading ? "Sending..." : "Send Preview"}
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Email Template Preview</CardTitle>
          <CardDescription>
            This is how your daily reminder email will look
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="border rounded-lg overflow-hidden">
            <div className="bg-gray-100 dark:bg-gray-800 p-4 border-b">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Subject: 🚀 Daily Coding Reminder - Two Sum
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-900">
              <div className="max-w-2xl mx-auto">
                {/* Email Header */}
                <div className="text-center mb-8">
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    🚀 Daily Coding Reminder
                  </h1>
                  <p className="text-gray-600 dark:text-gray-400">
                    Keep your coding skills sharp!
                  </p>
                </div>

                {/* DSA Problem Section */}
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Today's DSA Problem
                  </h2>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    Two Sum
                  </h3>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full text-sm font-medium">
                      EASY
                    </span>
                    <span className="text-gray-600 dark:text-gray-400">
                      Arrays
                    </span>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      Companies asking this:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs">
                        Google
                      </span>
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs">
                        Amazon
                      </span>
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs">
                        Meta
                      </span>
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs">
                        Apple
                      </span>
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs">
                        Microsoft
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href="#"
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    >
                      Solve on LeetCode
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    >
                      View Solution
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                    >
                      Watch YouTube
                    </a>
                  </div>
                </div>

                {/* System Design Section */}
                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 mb-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    🏗 System Design
                  </h2>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    Design a URL Shortener (TinyURL)
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Design a service like TinyURL or bit.ly that shortens long URLs into short, unique aliases.
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href="#"
                      className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
                    >
                      View Reference
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                    >
                      Watch Video
                    </a>
                  </div>
                </div>

                {/* Footer */}
                <div className="text-center pt-6 border-t border-gray-200 dark:border-gray-800">
                  <p className="text-gray-600 dark:text-gray-400">
                    Happy Coding! 🎉
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                    You received this email because you subscribed to DSA Reminder.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
