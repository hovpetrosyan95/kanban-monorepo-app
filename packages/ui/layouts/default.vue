<template>
  <div class="min-h-screen bg-app-bg text-text-main">
    <header
      class="fixed top-0 z-40 w-full border-b border-border bg-card-bg/80 backdrop-blur-md lg:left-20 lg:w-[calc(100%-5rem)]"
    >
      <div class="flex h-16 items-center px-6">
        <h1 class="text-xl font-bold tracking-tight">
          {{ route.meta.title || "Kanban" }}
        </h1>
      </div>
    </header>

    <Navbar />
    <main class="pt-16 pb-16 lg:pb-0 lg:pl-20">
      <div class="p-6 lg:p-10">
        <slot />
      </div>
    </main>
  </div>
</template>

<script setup>
const route = useRoute();
</script>
