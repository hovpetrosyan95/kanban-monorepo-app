<template>
  <p
    class="leading-relaxed transition-colors"
    :class="[variants[variant], { 'line-clamp-2': truncated }]"
  >
    <slot />
  </p>
</template>

<script setup lang="ts">
defineProps({
  variant: {
    type: String as () => "body" | "muted" | "label",
    default: "body",
  },
  truncated: { type: Boolean, default: false },
});

const variants = {
  body: "text-sm text-text-main font-medium",
  muted: "text-xs text-text-muted/80 font-medium",
  label: "text-[10px] font-black uppercase tracking-widest text-text-muted/60",
};
</script>
