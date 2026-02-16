import type { TaskAction, TaskActionId, TaskPriority } from "../types/kanban";

export const TASK_ACTIONS: Record<TaskActionId, TaskAction> = {
  edit: {
    id: "edit",
    label: "Edit Task",
    variant: "ghost",
  },
  duplicate: {
    id: "duplicate",
    label: "Duplicate",
    variant: "ghost",
  },
  delete: {
    id: "delete",
    label: "Delete Task",
    variant: "danger",
  },
};

interface PriorityOption {
  id: TaskPriority;
  label: string;
}

export const PRIORITY_OPTIONS: PriorityOption[] = [
  { id: "low", label: "Low X" },
  { id: "medium", label: "Medium" },
  { id: "high", label: "High" },
];
export const TASK_PRIORITIES = PRIORITY_OPTIONS.map((p) => p.id);
export const TASK_ACTION_LIST = Object.values(TASK_ACTIONS);
export const TASK_STATUSES = ["todo", "in-progress", "done"] as const;
