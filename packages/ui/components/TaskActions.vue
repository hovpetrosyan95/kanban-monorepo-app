<template>
  <div class="relative">
    <Button
      variant="ghost"
      class="!h-8 !w-8 !p-0 text-text-muted/40 hover:text-brand"
      @click.stop.prevent="toggle"
    >
      <span class="i-heroicons-ellipsis-horizontal-20-solid h-5 w-5" />
    </Button>

    <Teleport to="body">
      <Transition
        enter-active-class="transition-opacity duration-150 ease-out"
        enter-from-class="opacity-0"
        leave-active-class="transition-opacity duration-150 ease-in"
        leave-to-class="opacity-0"
      >
        <div v-if="isOpen" class="fixed inset-0 z-50" @click.stop="close">
          <div
            class="fixed w-48 overflow-hidden rounded-xl border border-border bg-white p-1.5 shadow-xl select-none"
            :style="{ top: `${coords.top}px`, left: `${coords.left}px` }"
            @click.stop
          >
            <template v-for="action in TASK_ACTION_LIST" :key="action.id">
              <div
                v-if="action.id === 'delete'"
                class="my-1 h-px bg-border/50"
              />

              <Button
                variant="ghost"
                class="!w-full !justify-start gap-3 !px-3 !py-2 !rounded-lg"
                :class="{
                  '!text-urgent hover:!bg-urgent/10': action.id === 'delete',
                }"
                @click="
                  execute(action.id);
                  close();
                "
              >
                <Text variant="body" class="!text-xs font-bold text-inherit">
                  {{ action.label }}
                </Text>
              </Button>
            </template>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import type { Task } from "../types/kanban";

const props = defineProps<{ task: Task }>();

// Decoupled Logic
const { execute } = useTaskActions(props.task);
const { isOpen, coords, toggle, close } = useDropdown();
</script>
