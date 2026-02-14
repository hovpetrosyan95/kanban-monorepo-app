<template>
  <div class="relative min-h-[calc(100vh-var(--spacing-16))] lg:min-h-screen">
    <!-- Desktop Header: Button at the top right -->
    <div class="hidden lg:flex items-center justify-between p-8">
      <h1 class="text-2xl font-bold text-text-main">Board</h1>

      <Button variant="primary">
        <span class="i-heroicons-plus-20-solid w-5 h-5" />
        Add New Task
      </Button>
    </div>

    <!-- Mobile Header: Just the title -->
    <div class="lg:hidden p-4">
      <h1 class="text-2xl font-bold text-text-main">Board</h1>
    </div>

    <!-- Mobile FAB (Floating Action Button) -->
    <!-- Positioned above the bottom navigation bar (bottom-20) -->
    <div class="lg:hidden fixed right-6 bottom-20 z-50">
      <Button
        variant="primary"
        class="w-14 h-14 !rounded-full shadow-lg shadow-brand/40"
      >
        <span class="i-heroicons-plus-20-solid w-7 h-7" />
      </Button>
    </div>

    <!-- Empty State Placeholder -->
    <div class="flex items-center justify-center h-64 text-text-muted italic">
      Data here
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  title: "Project Board",
});
</script>
