// packages/ui/composables/useDeleteConfirm.ts
export const useDeleteConfirm = () => {
  const kanbanStore = useKanbanStore();
  const router = useRouter();
  const route = useRoute();

  const handleConfirmDelete = async () => {
    const task = kanbanStore.deleteConfirmation.task;
    if (!task) return;

    const idToDelete = task.id;
    await kanbanStore.deleteTask(idToDelete);
    kanbanStore.closeDeleteConfirm();

    if (route.params.taskId === idToDelete) {
      router.push("/board");
    }
  };

  return {
    // Return reactive refs directly from store
    isOpen: computed(() => kanbanStore.deleteConfirmation.isOpen),
    taskTitle: computed(() => kanbanStore.deleteConfirmation.task?.title || ""),
    openDeleteConfirm: kanbanStore.openDeleteConfirm,
    closeDeleteConfirm: kanbanStore.closeDeleteConfirm,
    handleConfirmDelete,
  };
};
