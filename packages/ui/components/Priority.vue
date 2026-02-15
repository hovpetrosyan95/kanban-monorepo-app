<template>
  <div class="flex items-center gap-2">
    <div
      class="h-1.5 w-1.5 rounded-full ring-2 ring-offset-2 ring-offset-white shadow-sm"
      :class="colorMap[value]"
    />

    <Text variant="label">
      {{ value }}
    </Text>
  </div>
</template>

<script setup lang="ts">
import type { Task } from "../types/kanban";

defineProps<{
  value: Task["priority"];
}>();

const colorMap: Record<Task["priority"], string> = {
  low: "bg-todo ring-todo/10",
  medium: "bg-progress ring-progress/10",
  high: "bg-urgent ring-urgent/10",
};
</script>
