<script setup lang="ts">
import type { Task } from "../../types/kanban";

const route = useRoute();
const router = useRouter();
const kanbanStore = useKanbanStore();

const { open } = useTaskModal();

const taskId = computed(() => route.params.taskId as string);

const task = computed<Task | undefined>(() =>
  kanbanStore.tasks.find((t: Task) => t.id === taskId.value),
);

const handleEdit = (): void => {
  if (task.value) open(task.value);
};

const handleBack = (): void => {
  window.history.length > 1 ? router.back() : router.push("/board");
};

onMounted(() => {
  if (!task.value) {
    router.replace("/board");
  }
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
      >
        <span class="i-heroicons-arrow-left-20-solid h-5 w-5" />
      </Button>
      <TextTitle size="md" class="opacity-40">Task Detail</TextTitle>
    </nav>

    <TaskCard
      :task="task"
      :truncated="false"
      class="!p-8 !shadow-[0_20px_50px_rgba(0,0,0,0.05)] !border-border/10"
    >
      <template #actions>
        <Button
          variant="secondary"
          size="sm"
          class="!h-10 !w-10 !p-0 rounded-2xl shadow-sm transition-transform active:scale-90"
          @click.stop="handleEdit"
        >
          <span class="i-heroicons-pencil-square h-5 w-5" />
        </Button>
      </template>
    </TaskCard>
  </main>
</template>
