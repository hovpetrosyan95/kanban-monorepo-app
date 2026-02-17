<script setup lang="ts">
import draggable from "vuedraggable";
import type { TaskStatus, Task } from "../types/kanban";
import { useDragBoard } from "../composables/useDragBoard";

const { status, list } = defineProps<{
  status: TaskStatus;
  list: Task[];
}>();
const { onTaskChange } = useDragBoard();

// check later
const internalList = ref([...list]);

watch(
  () => list,
  (newList) => {
    internalList.value = [...newList];
  },
  { deep: true },
);
</script>
<!--  -->
<template>
  <draggable
    v-model="internalList"
    group="tasks"
    item-key="id"
    handle=".drag-handle"
    :animation="250"
    :force-fallback="true"
    ghost-class="opacity-0"
    class="flex flex-col gap-4 min-h-[300px] rounded-[40px] bg-black/[0.02] p-3 border border-dashed border-black/[0.03]"
    @change="(e: any) => onTaskChange(e, status)"
  >
    <template #item="{ element: task }">
      <div :key="task.id" class="w-full">
        <slot name="item" :task="task" />
      </div>
    </template>

    <template #footer>
      <div v-if="internalList.length === 0">
        <slot name="empty" />
      </div>
    </template>
  </draggable>
</template>
