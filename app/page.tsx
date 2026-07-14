import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Check, Clock, Zap, Target, BarChart3, Users, Mail, Calendar, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Master DSA with
            <span className="text-blue-600 dark:text-blue-400"> Daily Practice</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Get curated LeetCode problems and System Design questions delivered to your inbox every day.
            Stay consistent, build your streak, and ace your interviews.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/login">
              <Button size="lg" className="w-full sm:w-auto">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="#features">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Comprehensive features to help you prepare effectively
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card>
            <CardHeader>
              <Mail className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
              <CardTitle>Daily Email Reminders</CardTitle>
              <CardDescription>
                Receive a curated problem every day at your preferred time
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <Target className="h-12 w-12 text-green-600 dark:text-green-400 mb-4" />
              <CardTitle>Curated Problems</CardTitle>
              <CardDescription>
                Hand-picked LeetCode problems from top companies
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <Calendar className="h-12 w-12 text-purple-600 dark:text-purple-400 mb-4" />
              <CardTitle>System Design</CardTitle>
              <CardDescription>
                Regular system design questions to round out your preparation
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <TrendingUp className="h-12 w-12 text-orange-600 dark:text-orange-400 mb-4" />
              <CardTitle>Track Progress</CardTitle>
              <CardDescription>
                Monitor your streak, completion rate, and problem history
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <Clock className="h-12 w-12 text-pink-600 dark:text-pink-400 mb-4" />
              <CardTitle>Flexible Scheduling</CardTitle>
              <CardDescription>
                Customize reminder times and frequency to match your schedule
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <Zap className="h-12 w-12 text-yellow-600 dark:text-yellow-400 mb-4" />
              <CardTitle>Quick Solutions</CardTitle>
              <CardDescription>
                Access solution links and video explanations for every problem
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-blue-50 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Get started in 3 simple steps
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Sign Up</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Create your free account in seconds with email or Google
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Configure</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Set your preferred time, timezone, and problem frequency
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Practice</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Receive daily problems and track your progress
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Users Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Join thousands of developers improving their skills
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-12 h-12 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold mr-4">
                  JD
                </div>
                <div>
                  <p className="font-semibold">John Doe</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Software Engineer</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                "DSA Reminder helped me maintain a 30-day streak. The daily emails kept me accountable and the curated problems were perfect for interview prep."
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 dark:bg-green-900 rounded-full w-12 h-12 flex items-center justify-center text-green-600 dark:text-green-400 font-bold mr-4">
                  SK
                </div>
                <div>
                  <p className="font-semibold">Sarah Kim</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Frontend Developer</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                "The system design problems are a great addition. I've learned so much about scalability and distributed systems through the weekly questions."
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 dark:bg-purple-900 rounded-full w-12 h-12 flex items-center justify-center text-purple-600 dark:text-purple-400 font-bold mr-4">
                  MR
                </div>
                <div>
                  <p className="font-semibold">Mike Rodriguez</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Full Stack Developer</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                "I landed my dream job at Google thanks to the consistent practice. The company-specific problem selection was incredibly helpful."
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Is DSA Reminder free?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Yes! DSA Reminder is completely free forever. We believe in making coding education accessible to everyone.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>How often will I receive problems?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  You can customize the frequency. By default, you'll receive one DSA problem daily and one System Design problem every 3 days. You can adjust these settings in your dashboard.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Can I pause the reminders?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Absolutely! You can pause and resume reminders anytime from your settings page. Your progress and streak will be preserved.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>What companies are the problems from?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Our problem set includes questions from top tech companies like Google, Amazon, Meta, Apple, Microsoft, Netflix, and more. We focus on frequently asked interview questions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Simple Pricing
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Free forever, no hidden fees
          </p>
        </div>
        <div className="max-w-md mx-auto">
          <Card className="border-2 border-blue-500 dark:border-blue-400">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl">Free Forever</CardTitle>
              <CardDescription className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                $0/month
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center">
                <Check className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" />
                <span>Unlimited daily problems</span>
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" />
                <span>System design questions</span>
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" />
                <span>Progress tracking</span>
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" />
                <span>Customizable schedule</span>
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" />
                <span>Streak tracking</span>
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" />
                <span>Problem history</span>
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" />
                <span>Bookmark problems</span>
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" />
                <span>Analytics dashboard</span>
              </div>
              <Link href="/login">
                <Button size="lg" className="w-full mt-6">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 dark:bg-blue-700 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Ace Your Next Interview?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of developers practicing daily
          </p>
          <Link href="/login">
            <Button size="lg" variant="secondary" className="w-full sm:w-auto">
              Start Your Journey Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">DSA Reminder</h3>
              <p className="text-sm">
                Daily coding problems delivered to your inbox to help you ace your technical interviews.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/login" className="hover:text-white">Login</Link></li>
                <li><Link href="/dashboard" className="hover:text-white">Dashboard</Link></li>
                <li><Link href="/settings" className="hover:text-white">Settings</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="https://leetcode.com" className="hover:text-white">LeetCode</Link></li>
                <li><Link href="https://github.com" className="hover:text-white">GitHub</Link></li>
                <li><Link href="https://systemdesign.one" className="hover:text-white">System Design</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-white">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2024 DSA Reminder. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
