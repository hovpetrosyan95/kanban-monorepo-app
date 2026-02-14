<template>
  <button
    class="flex items-center justify-center gap-2 rounded-xl px-4 py-2 font-bold transition-all duration-200 active:scale-95 disabled:opacity-50"
    :class="variants[variant]"
  >
    <slot />
  </button>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: "primary", // Options: primary, secondary, ghost, danger
  },
});

const variants = {
  primary: "bg-brand text-white hover:bg-brand/90 shadow-sm",
  secondary: "bg-brand-light text-brand hover:bg-brand/10",
  ghost: "text-text-muted hover:bg-gray-100",
  danger: "bg-urgent text-white hover:bg-urgent/90 shadow-sm shadow-urgent/20",
};
</script>
