<template>
  <div
    class="flex items-center gap-1.5 text-text-muted/50 font-semibold italic"
  >
    <span class="i-heroicons-calendar-days h-3 w-3 opacity-70" />
    <time
      :datetime="new Date(value).toISOString()"
      class="text-[10px] tracking-tight"
    >
      {{ formattedDate }}
    </time>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  value: string | Date;
}>();

const formattedDate = computed(() => {
  return new Date(props.value).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
});
</script>
