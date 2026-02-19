<script setup lang="ts">
import type { TaskStatus } from "../types/kanban";

defineProps<{
  status: TaskStatus;
  count: number;
}>();
</script>

<template>
  <section class="flex w-full flex-col lg:w-80 lg:shrink-0">
    <div class="mb-5 flex items-center justify-between px-3">
      <div class="flex items-center gap-2.5">
        <div class="h-2 w-2 rounded-full" :class="[STATUS_MAP[status].color]" />
        <TextTitle size="md">
          {{ STATUS_MAP[status].label }}
        </TextTitle>
      </div>
      <Text variant="badge" as="span">
        {{ count }}
      </Text>
    </div>

    <!-- Draggable Slot -->
    <slot />
  </section>
</template>
