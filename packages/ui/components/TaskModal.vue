<script setup lang="ts">
const { isOpen, form, close } = useTaskModal();
const kanbanStore = useKanbanStore();

const handleSave = () => {
  if (!form.title) return;
  kanbanStore.createTask({ ...form });
  close();
};
</script>

<template>
  <Teleport to="body">
    <!-- Wrapper: Covers the whole screen and uses Flexbox for centering -->
    <div
      v-if="isOpen"
      class="fixed inset-0 z-[100] flex items-end justify-center lg:items-center"
    >
      <!-- Backdrop: Separate from the modal to allow blurring -->
      <div
        class="absolute inset-0 bg-text-main/40 backdrop-blur-sm transition-opacity"
        @click="close"
      />

      <!-- Modal Container -->
      <div
        class="relative bg-card-bg shadow-2xl transition-all duration-300 /* Mobile: Bottom Sheet */ w-full rounded-t-[32px] p-6 pb-12 /* Desktop: Centered Box */ lg:w-[480px] lg:rounded-3xl lg:p-8"
      >
        <!-- Mobile Drag Handle -->
        <div class="mx-auto mb-6 h-1.5 w-12 rounded-full bg-border lg:hidden" />

        <form @submit.prevent="handleSave" class="flex flex-col gap-5">
          <header class="flex items-center justify-between">
            <h2 class="text-xl font-bold">New Task</h2>
            <Button variant="ghost" class="!p-2" @click="close">
              <span class="i-heroicons-x-mark-20-solid h-6 w-6" />
            </Button>
          </header>

          <!-- All Inputs -->
          <input
            v-model="form.title"
            placeholder="Title"
            required
            class="rounded-xl border p-3"
          />
          <textarea
            v-model="form.description"
            placeholder="Description"
            rows="3"
            class="rounded-xl border p-3"
          />

          <div class="flex gap-2">
            <button
              v-for="p in ['low', 'medium', 'high'] as const"
              :key="p"
              type="button"
              @click="form.priority = p"
              class="flex-1 py-2 rounded-lg border text-xs font-bold uppercase transition-all"
              :class="
                form.priority === p
                  ? 'bg-brand text-white'
                  : 'bg-app-bg text-text-muted'
              "
            >
              {{ p }}
            </button>
          </div>

          <div class="flex gap-3 pt-2">
            <Button
              type="button"
              variant="secondary"
              class="flex-1"
              @click="close"
              >Cancel</Button
            >
            <Button type="submit" variant="primary" class="flex-1"
              >Create Task</Button
            >
          </div>
        </form>
      </div>
    </div>
  </Teleport>
</template>
