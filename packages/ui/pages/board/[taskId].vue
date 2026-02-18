<script setup lang="ts">
import { useDeleteConfirm } from "../../composables/useDeleteConfirm";
import { useTaskDetail } from "../../composables/useTaskDetail";

const route = useRoute();
const router = useRouter();

const { open } = useTaskModal();

const { task, validateOrRedirect } = useTaskDetail(route.params.taskId);

const { openDeleteConfirm } = useDeleteConfirm();

const handleDelete = () => {
  if (task.value) {
    openDeleteConfirm(task.value);
  }
};

const handleEdit = (): void => {
  if (task.value) open(task.value);
};

const handleBack = (): void => {
  window.history.length > 1 ? router.back() : router.push("/board");
};

onMounted(() => validateOrRedirect());
definePageMeta({
  title: "Task Details",
});
</script>

<template>
  <main
    v-if="task"
    class="max-w-2xl mx-auto p-6 space-y-8 animate-in fade-in duration-500"
  >
    <nav class="flex items-center gap-4">
      <Button
        variant="ghost"
        class="!h-10 !w-10 !p-0 rounded-xl hover:bg-black/5"
        @click="handleBack"
        haptic="light"
      >
        <span class="i-heroicons-arrow-left-20-solid h-5 w-5" />
      </Button>
      <TextTitle size="md" class="opacity-40">Back to Board</TextTitle>
    </nav>

    <TaskCard
      :task="task"
      :truncated="false"
      class="!p-8 !shadow-[0_20px_50px_rgba(0,0,0,0.05)] !border-border/10"
    >
      <template #actions>
        <div class="flex items-center gap-3">
          <Button
            variant="secondary"
            size="sm"
            class="!h-10 !w-10 !p-0 rounded-xl shadow-sm transition-transform active:scale-90"
            @click.stop="handleEdit"
            haptic="medium"
          >
            <span class="i-heroicons-pencil-square h-5 w-5" />
          </Button>
          <Button
            variant="danger"
            size="sm"
            class="!h-10 !w-10 !p-0 rounded-xl shadow-sm transition-transform active:scale-90"
            @click.stop="handleDelete"
          >
            <span class="i-heroicons-trash h-5 w-5" />
          </Button>
        </div>
      </template>
    </TaskCard>
  </main>
</template>
