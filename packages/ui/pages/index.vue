<script setup lang="ts">
definePageMeta({
  title: "Home Page",
});
</script>

<template>
  <main
    class="min-h-screen flex flex-col items-center justify-center p-6 text-center"
  >
    <hgroup class="space-y-4 mb-10">
      <TextTitle size="xl" class="max-w-2xl mx-auto">
        Streamline your <span class="text-brand italic">Workflow</span> in
        seconds
      </TextTitle>

      <Text variant="muted" class="text-lg max-w-lg mx-auto">
        Kanban board for managing your tasks, create, duplicate, edit, delete
        functionality, board column dragging
      </Text>
    </hgroup>

    <NavLink to="/board">
      <Button>
        Open Workspace
        <span
          class="i-heroicons-arrow-right-20-solid w-5 h-5 transition-transform group-hover:translate-x-1"
        />
      </Button>
    </NavLink>
  </main>
</template>
