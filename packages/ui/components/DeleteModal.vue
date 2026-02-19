<script setup lang="ts">
const { isOpen, taskTitle, closeDeleteConfirm, handleConfirmDelete } =
  useDeleteConfirm();
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-if="isOpen"
        class="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-app-bg/60 backdrop-blur-md"
        @click.self="closeDeleteConfirm"
      >
        <div
          class="bg-white w-full max-w-sm rounded-[32px] p-8 shadow-2xl border border-border/40 space-y-6"
        >
          <div class="space-y-3 text-center">
            <div
              class="inline-flex mx-auto px-3 py-1 bg-urgent/10 text-urgent rounded-full text-[10px] font-black uppercase tracking-widest"
            >
              Action Required
            </div>

            <TextTitle size="md" class="!leading-tight">
              Delete "<span class="text-urgent italic">{{ taskTitle }}</span
              >"?
            </TextTitle>

            <Text variant="muted" class="text-sm opacity-70">
              This will permanently remove the task. This action cannot be
              undone.
            </Text>
          </div>

          <div class="flex flex-col gap-3">
            <Button
              variant="danger"
              haptic="heavy"
              with-haptic
              class="w-full !h-14 shadow-lg shadow-urgent/20"
              @click="handleConfirmDelete"
            >
              Delete Task
            </Button>

            <Button
              variant="ghost"
              haptic="light"
              with-haptic
              class="w-full !h-12 !text-text-muted hover:!bg-black/5"
              @click="closeDeleteConfirm"
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
