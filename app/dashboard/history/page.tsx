import { resolveUser } from "@/lib/email-access";
import { sentProblemRepository } from "@/repositories/sent-problem-repository";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Clock, ExternalLink, Youtube, BookOpen } from "lucide-react";

export default async function HistoryPage() {
  const resolved = await resolveUser();
  if (!resolved?.user) {
    return null;
  }

  const sentProblems = await sentProblemRepository.findByUser(resolved.user.id, 100);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Problem History
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Track all the problems you've received
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Problems</CardTitle>
          <CardDescription>
            {sentProblems.length} problems received
          </CardDescription>
        </CardHeader>
        <CardContent>
          {sentProblems.length === 0 ? (
            <div className="text-center py-8">
              <Clock className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 dark:text-gray-400">
                No problems received yet
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {sentProblems.map((sentProblem) => (
                <div
                  key={sentProblem.id}
                  className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {sentProblem.problem?.title}
                      </h3>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          sentProblem.problem?.difficulty === "EASY"
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                            : sentProblem.problem?.difficulty === "MEDIUM"
                            ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                            : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                        }`}>
                          {sentProblem.problem?.difficulty}
                        </span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {sentProblem.problem?.topic}
                        </span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          • {sentProblem.problem?.type === "DSA" ? "DSA" : "System Design"}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                      {sentProblem.completed ? (
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                      ) : (
                        <Clock className="h-5 w-5 text-gray-400" />
                      )}
                    </div>
                  </div>

                  {sentProblem.problem?.companies && sentProblem.problem.companies.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {sentProblem.problem.companies.map((company) => (
                        <span
                          key={company}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs"
                        >
                          {company}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-3 border-t border-gray-200 dark:border-gray-800">
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <span>{new Date(sentProblem.sent_at).toLocaleDateString()}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        sentProblem.completed
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                      }`}>
                        {sentProblem.completed ? "Completed" : "Not completed"}
                      </span>
                      {sentProblem.opened && (
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                          Opened
                        </span>
                      )}
                    </div>

                    <div className="flex gap-2">
                      {sentProblem.problem?.leetcode_url && (
                        <a
                          href={sentProblem.problem.leetcode_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded"
                          title="Solve on LeetCode"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                      {sentProblem.problem?.solution_url && (
                        <a
                          href={sentProblem.problem.solution_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20 rounded"
                          title="View Solution"
                        >
                          <BookOpen className="h-4 w-4" />
                        </a>
                      )}
                      {sentProblem.problem?.youtube_url && (
                        <a
                          href={sentProblem.problem.youtube_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded"
                          title="Watch Video"
                        >
                          <Youtube className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}