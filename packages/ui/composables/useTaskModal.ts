import type { Task } from "../types/kanban";

const isOpen = ref(false);
const editingId = ref<string | null>(null);

export const useTaskModal = () => {
  const { form, reset } = useTaskForm();

  const open = (task?: Task) => {
    if (task) {
      editingId.value = task.id;
      Object.assign(form, {
        title: task.title,
        description: task.description,
        status: task.status,
        priority: task.priority,
      });
    } else {
      editingId.value = null;
      reset();
    }
    isOpen.value = true;
  };

  const close = () => {
    isOpen.value = false;
    // Delay reset until animation finishes
    setTimeout(() => {
      editingId.value = null;
      reset();
    }, 300);
  };

  return {
    isOpen: readonly(isOpen),
    editingId: readonly(editingId),
    form,
    open,
    close,
  };
};
