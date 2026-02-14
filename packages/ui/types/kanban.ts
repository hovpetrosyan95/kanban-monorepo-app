export interface Task {
  id: string;
  title: string;
  description: string;
  status: "todo" | "in-progress" | "done";
  priority: "low" | "medium" | "high";
  createdAt: string;
}

// Helper for creating new tasks (omitting ID and date)
export type CreateTaskInput = Omit<Task, "id" | "createdAt">;
