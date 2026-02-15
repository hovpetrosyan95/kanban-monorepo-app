<template>
  <component
    :is="as"
    class="font black tracking-tight text-text-main leading-tight"
    :class="sizes[size]"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
defineProps({
  as: { type: String, default: "h2" },
  size: { type: String as () => "sm" | "md" | "lg" | "xl", default: "md" },
});

const sizes = {
  sm: "text-sm lg:text-base", // Card Titles
  md: "text-lg lg:text-xl", // Column Headers
  lg: "text-2xl lg:text-3xl", // Page Headers
  xl: "text-4xl lg:text-6xl", // Hero/Welcome
};
</script>
