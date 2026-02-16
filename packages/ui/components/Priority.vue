<template>
  <div class="flex items-center gap-2">
    <div
      class="h-1.5 w-1.5 rounded-full ring-2 ring-offset-2 ring-offset-white shadow-sm"
      :class="colorMap[value]"
    />

    <Text variant="label" class="!text-inherit">
      {{ currentLabel }}
    </Text>
  </div>
</template>

<script setup lang="ts">
import { TaskPriority } from "../types/kanban";

const props = defineProps<{
  value: TaskPriority;
}>();

const colorMap: Record<TaskPriority, string> = {
  low: "bg-todo ring-todo/10",
  medium: "bg-progress ring-progress/10",
  high: "bg-urgent ring-urgent/10",
};

const currentLabel = computed(() => {
  return (
    PRIORITY_OPTIONS.find((opt) => opt.id === props.value)?.label || props.value
  );
});
</script>
