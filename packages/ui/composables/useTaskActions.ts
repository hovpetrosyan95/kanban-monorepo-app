import type { Task } from "../types/kanban";
import { TASK_ACTIONS } from "../constants/task";

export const useTaskActions = (task: Task) => {
  const kanbanStore = useKanbanStore();
  const { open } = useTaskModal();

  const execute = (actionId: string) => {
    switch (actionId) {
      case TASK_ACTIONS.edit.id:
        open(task);
        break;

      case TASK_ACTIONS.duplicate.id:
        const { id, createdAt, ...rest } = task;
        kanbanStore.createTask({
          ...rest,
          title: `${rest.title} (Copy)`,
        });
        break;

      case TASK_ACTIONS.delete.id:
        kanbanStore.deleteTask(task.id);
        break;

      default:
        console.warn(`Action ${actionId} is not implemented.`);
    }
  };

  return {
    execute,
  };
};
