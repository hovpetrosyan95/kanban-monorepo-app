<template>
  <div class="flex flex-col gap-1.5 w-full">
    <!-- Use :is to switch between input and textarea -->
    <component
      :is="as"
      :value="modelValue"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
      v-bind="$attrs"
      class="w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm text-text-main transition-all placeholder:text-text-muted/40 focus:border-brand focus:ring-4 focus:ring-brand/10 outline-none"
    />
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    modelValue?: string | number;
    as?: "input" | "textarea";
  }>(),
  {
    modelValue: "",
    as: "input", // Default to standard input
  },
);

defineEmits(["update:modelValue"]);
</script>
