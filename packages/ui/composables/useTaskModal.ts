import type { CreateTaskInput } from "../types/kanban";

const createInitialState = (): CreateTaskInput => ({
  title: "",
  description: "",
  status: "todo",
  priority: "medium",
});

const isOpen = ref(false);
const form = reactive(createInitialState());

export const useTaskModal = () => {
  const open = () => {
    isOpen.value = true;
  };

  const close = () => {
    isOpen.value = false;
    // Reset form after exit animation
    setTimeout(() => {
      Object.assign(form, createInitialState());
    }, 300);
  };

  return { isOpen: readonly(isOpen), form, open, close };
};
