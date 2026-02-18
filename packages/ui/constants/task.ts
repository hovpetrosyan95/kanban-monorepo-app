import type {
  TaskAction,
  TaskActionId,
  TaskPriority,
  TaskStatus,
} from "../types/kanban";

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
  { id: "low", label: "Low" },
  { id: "medium", label: "Medium" },
  { id: "high", label: "High" },
];
export const TASK_PRIORITIES = PRIORITY_OPTIONS.map((p) => p.id);
export const TASK_ACTION_LIST = Object.values(TASK_ACTIONS);

export const STATUS_MAP: Record<TaskStatus, { label: string; color: string }> =
  {
    todo: { label: "To Do", color: "bg-slate-500" },
    "in-progress": { label: "In Progress", color: "bg-brand" },
    done: { label: "Done", color: "bg-green-500" },
  };
export const TASK_STATUSES = Object.keys(STATUS_MAP) as TaskStatus[];
