<!-- apps/web/pages/board.vue -->
<script setup lang="ts">
import { TASK_STATUSES } from "../../constants/task";
definePageMeta({ title: "Board" });
const { open } = useTaskModal();

const { columns } = useDragBoard();
</script>

<template>
  <div class="relative min-h-screen h-full px-6 pt-6 pb-32 lg:pb-12">
    <header class="hidden lg:flex items-center justify-between mb-10">
      <div class="space-y-1">
        <h1
          class="text-3xl font-black text-text-main tracking-tight uppercase italic"
        >
          Workflow
        </h1>
        <p class="text-sm text-text-muted font-medium opacity-50">
          Drag cards to reorganize
        </p>
      </div>
      <Button
        variant="primary"
        class="px-8 shadow-xl shadow-brand/20"
        @click="open()"
      >
        Add Task
      </Button>
    </header>

    <ClientOnly>
      <div
        class="flex flex-col lg:flex-row gap-8 lg:items-start lg:gap-6 lg:overflow-x-auto min-h-[60vh]"
      >
        <BoardColumn
          v-for="status in TASK_STATUSES"
          :key="status"
          :status="status"
          :count="columns[status].length"
        >
          <BoardDraggableList :status="status" :list="columns[status]">
            <template #item="{ task }">
              <NuxtLink :to="`/board/${task.id}`" custom v-slot="{ navigate }">
                <div
                  @click="navigate"
                  class="cursor-pointer transition-all active:scale-[0.97]"
                >
                  <TaskCard :task="task">
                    <template #actions>
                      <div @click.stop><TaskActions :task="task" /></div>
                    </template>
                  </TaskCard>
                </div>
              </NuxtLink>
            </template>
            <template #empty>
              <EmptyColumn />
            </template>
          </BoardDraggableList>
        </BoardColumn>
      </div>
    </ClientOnly>

    <div class="lg:hidden fixed right-8 bottom-28 z-50">
      <Button
        variant="primary"
        class="h-16 w-16 !rounded-full shadow-2xl"
        @click="open()"
      >
        <span class="i-heroicons-plus-20-solid w-8 h-8 text-white" />
      </Button>
    </div>
  </div>
</template>
