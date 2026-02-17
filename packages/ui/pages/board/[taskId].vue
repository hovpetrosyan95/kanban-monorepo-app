<script setup lang="ts">
import { useTaskDetail } from "../../composables/useTaskDetail";
import { STATUS_MAP, TASK_STATUSES } from "../../constants/task";

const route = useRoute();
const router = useRouter();

const { open } = useTaskModal();

const { task, validateOrRedirect } = useTaskDetail(route.params.taskId);

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
          <!-- 1. COMPACT STATUS PICKER USING BUTTON ATOM -->
          <div
            class="flex p-1 bg-border/20 rounded-xl border border-border/5 shadow-inner"
          >
            <Button
              v-for="statusId in TASK_STATUSES"
              :key="statusId"
              size="sm"
              variant="ghost"
              class="!h-8 !px-3 !py-0 !rounded-lg !text-[10px] !font-black uppercase flex items-center gap-1.5 transition-all duration-200"
              :class="
                task.status === statusId
                  ? 'bg-white !shadow-sm !text-brand scale-[1.05]'
                  : '!text-text-muted/40 hover:!text-text-muted'
              "
            >
              <!-- Indicator Dot from STATUS_MAP -->
              <div
                :class="[
                  STATUS_MAP[statusId].color,
                  'h-1.5 w-1.5 rounded-full',
                ]"
              />
              {{ STATUS_MAP[statusId].label.split(" ")[0] }}
            </Button>
          </div>

          <!-- 2. EDIT BUTTON ATOM -->
          <Button
            variant="secondary"
            size="sm"
            class="!h-10 !w-10 !p-0 rounded-xl shadow-sm transition-transform active:scale-90"
            @click.stop="handleEdit"
          >
            <span class="i-heroicons-pencil-square h-5 w-5" />
          </Button>
        </div>
      </template>
    </TaskCard>
  </main>
</template>
