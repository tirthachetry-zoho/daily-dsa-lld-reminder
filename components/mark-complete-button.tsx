"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Circle } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

interface MarkCompleteButtonProps {
  sentProblemId: string;
  initialCompleted: boolean;
  variant?: "default" | "outline" | "ghost" | "secondary";
  size?: "default" | "sm" | "lg" | "icon";
}

export function MarkCompleteButton({
  sentProblemId,
  initialCompleted,
  variant = "outline",
  size = "sm",
}: MarkCompleteButtonProps) {
  const [completed, setCompleted] = useState(initialCompleted);
  const [isLoading, setIsLoading] = useState(false);

  const toggle = async () => {
    const next = !completed;
    setCompleted(next);
    setIsLoading(true);

    try {
      const response = await fetch("/api/complete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sentProblemId, completed: next }),
      });

      if (!response.ok) {
        setCompleted(!next);
        toast({
          title: "Error",
          description: "Failed to update completion status",
          variant: "destructive",
        });
      }
    } catch (error) {
      setCompleted(!next);
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
    <Button
      type="button"
      variant={completed ? "secondary" : variant}
      size={size}
      onClick={toggle}
      disabled={isLoading}
      className="gap-2"
    >
      {completed ? (
        <CheckCircle2 className="h-4 w-4 text-green-600" />
      ) : (
        <Circle className="h-4 w-4" />
      )}
      {completed ? "Completed" : "Mark complete"}
    </Button>
  );
}