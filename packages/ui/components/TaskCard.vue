<template>
  <div
    class="group relative flex flex-col gap-3 rounded-2xl border border-border/40 bg-white p-4 shadow-sm transition-all hover:shadow-md active:scale-[0.98] cursor-grab touch-manipulation"
  >
    <div class="flex items-center justify-between">
      <Priority :value="task.priority" />
      <div class="relative z-10">
        <slot name="actions" />
        <!-- Ellipsis on board, Edit/Save on Page -->
      </div>
    </div>

    <div class="space-y-1">
      <TextTitle
        as="h3"
        size="sm"
        class="group-hover:text-brand transition-colors"
      >
        {{ task.title }}
      </TextTitle>

      <Text v-if="task.description" variant="muted" :truncated="truncated">
        {{ task.description }}
      </Text>
    </div>

    <div
      class="mt-1 flex items-center justify-between border-t border-border/20 pt-3"
    >
      <Date :value="task.createdAt" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Task } from "../types/kanban";
withDefaults(
  defineProps<{
    task: Task;
    truncated: boolean;
  }>(),
  {
    truncated: true,
  },
);
</script>
