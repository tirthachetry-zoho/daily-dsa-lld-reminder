import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Flame, Target, Clock, TrendingUp, CheckCircle2, Calendar } from "lucide-react";

export default async function DashboardPage() {
  const session = await auth();
  
  if (!session?.user) {
    return null;
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    include: {
      sentProblems: {
        include: {
          problem: true,
        },
        orderBy: {
          sentAt: "desc",
        },
        take: 30,
      },
    },
  });

  if (!user) {
    return null;
  }

  // Calculate stats
  const totalProblems = user.sentProblems.length;
  const completedProblems = user.sentProblems.filter((sp) => sp.completed).length;
  const completionRate = totalProblems > 0 ? Math.round((completedProblems / totalProblems) * 100) : 0;

  // Calculate streak
  const sortedProblems = [...user.sentProblems].sort((a, b) => 
    new Date(b.sentAt).getTime() - new Date(a.sentAt).getTime()
  );
  
  let streak = 0;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  for (let i = 0; i < sortedProblems.length; i++) {
    const problemDate = new Date(sortedProblems[i].sentAt);
    problemDate.setHours(0, 0, 0, 0);
    
    const daysDiff = Math.floor((today.getTime() - problemDate.getTime()) / (1000 * 60 * 60 * 24));
    
    if (daysDiff === i && sortedProblems[i].completed) {
      streak++;
    } else if (i === 0 && daysDiff === 1 && sortedProblems[i].completed) {
      streak++;
    } else {
      break;
    }
  }

  // Get today's problem
  const todayProblem = sortedProblems[0];
  const isToday = todayProblem && new Date(todayProblem.sentAt).toDateString() === today.toDateString();

  // Next reminder
  const [hours, minutes] = user.reminderTime.split(":").map(Number);
  const nextReminder = new Date();
  nextReminder.setHours(hours, minutes, 0, 0);
  if (nextReminder < today) {
    nextReminder.setDate(nextReminder.getDate() + 1);
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Welcome back!
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Here's your progress overview
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Current Streak</CardTitle>
            <Flame className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{streak} days</div>
            <p className="text-xs text-muted-foreground mt-1">
              Keep it going!
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Problems Received</CardTitle>
            <Target className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{totalProblems}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Total problems
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{completedProblems}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {completionRate}% completion rate
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Next Reminder</CardTitle>
            <Clock className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {nextReminder.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {user.isActive ? "Active" : "Paused"}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Today's Problem */}
      {isToday && todayProblem && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Today's Problem
            </CardTitle>
            <CardDescription>
              {todayProblem.problem.type === "DSA" ? "Data Structures & Algorithms" : "System Design"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {todayProblem.problem.title}
                </h3>
                <div className="flex items-center gap-2 mt-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    todayProblem.problem.difficulty === "EASY"
                      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                      : todayProblem.problem.difficulty === "MEDIUM"
                      ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                      : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                  }`}>
                    {todayProblem.problem.difficulty}
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {todayProblem.problem.topic}
                  </span>
                </div>
              </div>

              {todayProblem.problem.companies && todayProblem.problem.companies.length > 0 && (
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Companies asking this:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {todayProblem.problem.companies.map((company) => (
                      <span
                        key={company}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs"
                      >
                        {company}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex gap-2 pt-4">
                {todayProblem.problem.leetcodeUrl && (
                  <a
                    href={todayProblem.problem.leetcodeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Solve on LeetCode
                  </a>
                )}
                {todayProblem.problem.solutionUrl && (
                  <a
                    href={todayProblem.problem.solutionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                  >
                    View Solution
                  </a>
                )}
                {todayProblem.problem.youtubeUrl && (
                  <a
                    href={todayProblem.problem.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                  >
                    Watch Video
                  </a>
                )}
              </div>

              <div className="flex items-center gap-2 pt-4 border-t border-gray-200 dark:border-gray-800">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  todayProblem.completed
                    ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                    : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                }`}>
                  {todayProblem.completed ? "Completed" : "Not completed"}
                </span>
                {todayProblem.opened && (
                  <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                    Opened
                  </span>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* No problem today */}
      {!isToday && (
        <Card>
          <CardContent className="pt-6">
            <div className="text-center py-8">
              <Target className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                No problem received today yet
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Your next problem will arrive at {user.reminderTime} {user.timezone}
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Recent Activity
          </CardTitle>
          <CardDescription>Your last 7 problems</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {sortedProblems.slice(0, 7).map((sentProblem) => (
              <div
                key={sentProblem.id}
                className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
              >
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-900 dark:text-white truncate">
                    {sentProblem.problem.title}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {new Date(sentProblem.sentAt).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  {sentProblem.completed && (
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                  )}
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    sentProblem.problem.difficulty === "EASY"
                      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                      : sentProblem.problem.difficulty === "MEDIUM"
                      ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                      : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                  }`}>
                     {sentProblem.problem.difficulty}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
