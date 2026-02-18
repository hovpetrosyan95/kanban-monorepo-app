<template>
  <div class="min-h-screen bg-app-bg text-text-main">
    <header
      class="fixed top-0 z-40 w-full border-b border-border bg-card-bg/80 backdrop-blur-md lg:left-20 lg:w-[calc(100%-5rem)] pt-[env(safe-area-inset-top)]"
    >
      <div class="hidden lg:flex h-16 items-center px-6">
        <TextTitle as="h1" size="md">
          {{ route.meta.title || "Kanban" }}
        </TextTitle>
      </div>
    </header>

    <div
      class="fixed bottom-0 left-0 z-50 w-full bg-card-bg border-t border-border lg:z-40"
      :style="{ paddingBottom: 'env(safe-area-inset-bottom)' }"
    >
      <Navbar />
    </div>

    <main class="pt-16 lg:pb-0 lg:pl-20">
      <div
        class="relative z-10 p-6 lg:p-10 pb-[calc(5rem+env(safe-area-inset-bottom))] pt-[env(safe-area-inset-top)]"
      >
        <slot />
      </div>
    </main>

    <DeleteModal />
    <TaskModal />
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
</script>
