import { count } from "node:console";
import type { Task, TaskStatus } from "../types/kanban";
import { TASK_STATUSES } from "../constants/task";

export const useDragBoard = () => {
  const kanbanStore = useKanbanStore();

  const columns = reactive(
    TASK_STATUSES.reduce(
      (acc, status) => {
        acc[status] = computed({
          get: () => kanbanStore.getTasksByStatus(status),
        });
        return acc;
      },
      {} as Record<TaskStatus, ComputedRef<Task[]>>,
    ),
  );

  const onTaskChange = (event: any, newStatus: TaskStatus) => {
    if (event.added) {
      const taskId = event.added.element.id;
      kanbanStore.updateStatus(taskId, newStatus);
    }
  };

  return {
    columns,
    onTaskChange,
  };
};
