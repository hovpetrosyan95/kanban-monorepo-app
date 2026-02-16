<template>
  <div class="relative h-full">
    <div class="hidden lg:flex items-center justify-between mb-8">
      <div>
        <h1 class="text-2xl font-black text-text-main tracking-tight">
          Project Board
        </h1>
        <p class="text-sm text-text-muted">Manage your workflow</p>
      </div>
      <Button variant="primary" class="px-6" @click="open()">
        <span class="i-heroicons-plus-20-solid w-5 h-5" />
        New Task
      </Button>
    </div>

    <!-- Mobile: Vertical List | Web: Horizontal Scroll -->
    <ClientOnly>
      <div
        class="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-6 lg:overflow-x-auto lg:pb-8"
      >
        <section
          v-for="status in TASK_STATUSES"
          :key="status"
          class="flex w-full flex-col lg:w-80 lg:shrink-0"
        >
          <!-- Column Header -->
          <div class="mb-4 flex items-center justify-between px-2">
            <div class="flex items-center gap-2">
              <div
                class="h-2 w-2 rounded-full"
                :class="
                  status === 'todo'
                    ? 'bg-todo'
                    : status === 'in-progress'
                      ? 'bg-progress'
                      : 'bg-done'
                "
              />
              <h2
                class="text-xs font-black uppercase tracking-widest text-text-muted"
              >
                {{ status.replace("-", " ") }}
              </h2>
            </div>
            <span
              class="text-[10px] font-bold text-text-muted/40 bg-border/40 px-2 py-0.5 rounded-full"
            >
              {{ getTasksByStatus(status).length }}
            </span>
          </div>

          <!-- Task Cards -->
          <div class="flex flex-col gap-3 min-h-[100px]">
            <NuxtLink
              :to="`/board/${task.id}`"
              class="group relative flex flex-col gap-3 rounded-2xl border border-border/40 bg-white p-4 shadow-sm hover:shadow-md transition-all active:scale-[0.98] block"
              v-for="task in getTasksByStatus(status)"
              :key="task.id"
            >
              <TaskCard :task="task">
                <template #actions>
                  <TaskActions :task="task" />
                </template>
              </TaskCard>
            </NuxtLink>

            <!-- Empty State -->
            <div
              v-if="getTasksByStatus(status).length === 0"
              class="flex items-center justify-center rounded-2xl border-2 border-dashed border-border/30 p-8 text-[10px] font-bold uppercase tracking-widest text-text-muted/20"
            >
              No Tasks
            </div>
          </div>
        </section>
      </div>

      <div class="lg:hidden fixed right-6 bottom-24 z-40">
        <Button
          variant="primary"
          class="h-16 w-16 !rounded-full shadow-2xl shadow-brand/40 flex items-center justify-center !p-0"
          @click="open()"
        >
          <span class="i-heroicons-plus-20-solid w-8 h-8 text-white" />
        </Button>
      </div>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ title: "Board" });

const kanbanStore = useKanbanStore();
const { open } = useTaskModal();

import { TASK_STATUSES } from "../../constants/task";
import type { Task, TaskStatus } from "../../types/kanban";

const getTasksByStatus = (status: TaskStatus) => {
  return kanbanStore.tasks.filter((t: Task) => t.status === status);
};
</script>
