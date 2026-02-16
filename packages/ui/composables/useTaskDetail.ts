import type { Task } from "../types/kanban";

export const useTaskDetail = (id: string) => {
  const store = useKanbanStore();
  const router = useRouter();

  // 1. Reactive Lookup
  const task = computed<Task | undefined>(() =>
    store.tasks.find((t: Task) => t.id === id),
  );

  // 2. Automated Safety: If task is deleted or not found, go home
  const validateOrRedirect = () => {
    if (!task.value) {
      router.replace("/board");
    }
  };

  return {
    task,
    validateOrRedirect,
  };
};
