<template>
  <div
    class="group relative flex flex-col gap-3 rounded-2xl border border-border/40 bg-white p-4 shadow-sm transition-all hover:shadow-md active:scale-[0.98]"
  >
    <Priority :value="task.priority" />
    <Title as="h3" size="sm" class="group-hover:text-brand transition-colors">
      {{ task.title }}
    </Title>
    <Text v-if="task.description" variant="muted" truncated>
      {{ task.description }}
    </Text>
    <div
      class="mt-1 flex items-center justify-between border-t border-border/20 pt-3"
    >
      <Date :value="task.createdAt" />
      <span
        class="i-heroicons-ellipsis-horizontal w-4 h-4 text-text-muted/30"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Task } from "../types/kanban";
defineProps<{ task: Task }>();
</script>
