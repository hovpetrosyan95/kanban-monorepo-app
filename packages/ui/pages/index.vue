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
        The most intuitive Kanban board for your personal and professional
        projects. Built for speed, synced everywhere.
      </Text>
    </hgroup>

    <NuxtLink
      to="/board"
      class="group relative inline-flex items-center gap-3 px-10 py-4 bg-black text-white rounded-full font-bold transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-black/10"
      @click="triggerClickHaptic"
    >
      Open Workspace
      <span
        class="i-heroicons-arrow-right-20-solid w-5 h-5 transition-transform group-hover:translate-x-1"
      />

      <div
        class="absolute inset-0 rounded-full bg-brand/20 blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity"
      />
    </NuxtLink>
  </main>
</template>

<script setup lang="ts">
import { Haptics, ImpactStyle } from "@capacitor/haptics";

const triggerClickHaptic = async () => {
  await Haptics.impact({ style: ImpactStyle.Medium });
};

definePageMeta({
  title: "Home Page",
});
</script>

<!-- definePageMeta({
  title: "Home Page",
}); -->
