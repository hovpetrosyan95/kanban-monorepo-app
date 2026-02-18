<script setup lang="ts">
import { useHaptics } from "../composables/useHaptics";
import type { HapticStrength } from "../types/ui";

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";

const props = defineProps<{
  variant?: ButtonVariant;
  haptic?: HapticStrength;
}>();

const emit = defineEmits<{
  (e: "click", event: MouseEvent): void;
}>();

const { trigger } = useHaptics();

const handleClick = (event: MouseEvent) => {
  if (props.haptic) {
    trigger(props.haptic);
  }
  emit("click", event);
};

const variants: Record<ButtonVariant, string> = {
  primary: "bg-brand text-white hover:bg-brand/90 shadow-sm",
  secondary: "bg-brand-light text-brand hover:bg-brand/10",
  ghost: "text-text-muted hover:bg-gray-100",
  danger: "bg-urgent text-white hover:bg-urgent/90 shadow-sm shadow-urgent/20",
};
</script>

<template>
  <button
    type="button"
    class="flex items-center justify-center gap-2 rounded-xl px-4 py-2 font-bold transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none"
    :class="variants[variant || 'primary']"
    @click="handleClick"
  >
    <slot />
  </button>
</template>
