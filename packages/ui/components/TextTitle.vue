<template>
  <component
    :is="as"
    class="font-black tracking-tight text-text-main leading-tight"
    :class="sizes[size]"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
type TitleSize = "sm" | "md" | "lg" | "xl";

const props = withDefaults(
  defineProps<{
    as?: string;
    size?: TitleSize;
  }>(),
  {
    as: "h2",
    size: "md",
  },
);

const sizes = {
  sm: "text-sm lg:text-base", // Card Titles
  md: "text-lg lg:text-xl", // Column Headers
  lg: "text-2xl lg:text-3xl", // Page Headers
  xl: "text-4xl lg:text-6xl", // Hero/Welcome
};
</script>
