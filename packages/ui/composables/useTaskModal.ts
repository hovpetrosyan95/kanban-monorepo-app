import { TASK_STATUSES, TASK_PRIORITIES } from "../constants/task";
import type { CreateTaskInput, Task } from "../types/kanban";

const createInitialState = (): CreateTaskInput => ({
  title: "",
  description: "",
  status: TASK_STATUSES[0],
  priority: TASK_PRIORITIES[1],
});

const isOpen = ref(false);
const editingId = ref<string | null>(null);
const form = reactive(createInitialState());

export const useTaskModal = () => {
  const open = (task?: Task) => {
    if (task) {
      // EDIT - Fill with existing data
      editingId.value = task.id;
      Object.assign(form, {
        title: task.title,
        description: task.description,
        status: task.status,
        priority: task.priority,
      });
    } else {
      editingId.value = null;
      Object.assign(form, createInitialState());
    }
    isOpen.value = true;
  };

  const close = () => {
    isOpen.value = false;
    setTimeout(() => Object.assign(form, createInitialState()), 300);
  };

  return {
    isOpen: readonly(isOpen),
    editingId: readonly(editingId),
    form,
    open,
    close,
  };
};
