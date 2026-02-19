import { TASK_STATUSES, TASK_PRIORITIES } from "../constants/task";
import type { CreateTaskInput } from "../types/kanban";

const createInitialState = (): CreateTaskInput => ({
  title: "",
  description: "",
  status: TASK_STATUSES[0],
  priority: TASK_PRIORITIES[1],
});

const form = reactive(createInitialState());

export const useTaskForm = () => {
  const kanbanStore = useKanbanStore();

  const reset = () => {
    Object.assign(form, createInitialState());
  };

  const save = (id?: string | null) => {
    if (id) {
      kanbanStore.updateTask(id, { ...form });
    } else {
      kanbanStore.createTask({ ...form });
    }
  };

  return { form, reset, save };
};
