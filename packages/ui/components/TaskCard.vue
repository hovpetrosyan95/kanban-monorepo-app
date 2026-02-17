<script setup lang="ts">
import type { Task } from "../types/kanban";

withDefaults(
  defineProps<{
    task: Task;
    truncated?: boolean;
  }>(),
  {
    truncated: true,
  },
);
</script>

<template>
  <div
    class="drag-handle group relative flex flex-col gap-3 rounded-[28px] border border-border/40 bg-white p-5 shadow-sm transition-all hover:shadow-md active:scale-[0.98] cursor-grab active:cursor-grabbing touch-manipulation select-none"
  >
    <div class="flex items-start justify-between">
      <div class="flex items-center gap-3">
        <div class="opacity-10 group-hover:opacity-40 transition-opacity">
          <span class="i-heroicons-bars-2-20-solid h-4 w-4 rotate-90" />
        </div>
        <Priority :value="task.priority" />
      </div>

      <div class="relative z-50 pointer-events-auto" @click.stop>
        <slot name="actions" />
      </div>
    </div>

    <div class="space-y-1.5 pointer-events-none">
      <TextTitle
        as="h3"
        size="sm"
        class="group-hover:text-brand transition-colors !tracking-tight"
      >
        {{ task.title }}
      </TextTitle>

      <Text
        v-if="task.description"
        variant="muted"
        :truncated="truncated"
        class="!leading-relaxed opacity-60"
      >
        {{ task.description }}
      </Text>
    </div>

    <div
      class="mt-1 flex items-center justify-between border-t border-border/10 pt-4 pointer-events-none"
    >
      <Date :value="task.createdAt" />
      <span class="text-[8px] font-mono opacity-10 uppercase tracking-tighter">
        {{ task.status }}
      </span>
    </div>
  </div>
</template>
