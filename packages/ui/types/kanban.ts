export type TaskPriority = "low" | "medium" | "high";
export type TaskStatus = "todo" | "in-progress" | "done";

export type TaskActionId = "edit" | "duplicate" | "delete";

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  createdAt: string;
}
export interface TaskAction {
  id: TaskActionId;
  label: string;
  variant: string;
}

// Helper for creating new tasks (omitting ID and date)
export type CreateTaskInput = Omit<Task, "id" | "createdAt">;
