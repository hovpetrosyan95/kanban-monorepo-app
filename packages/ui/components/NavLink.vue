<template>
  <NuxtLink
    :to="to"
    class="group flex h-12 w-12 items-center justify-center rounded-xl text-text-muted transition-all duration-200 hover:bg-brand-light hover:text-brand active:scale-90 [&.router-link-active]:bg-brand-light [&.router-link-active]:text-brand [&.router-link-active]:font-bold lg:[&.router-link-active]:rounded-lg lg:[&.router-link-active]:shadow-sm"
    @click="handleClick"
  >
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
import { useHaptics } from "../composables/useHaptics";

const props = defineProps<{
  to: string;
}>();

const { trigger } = useHaptics();

const handleClick = () => {
  trigger("light");
};
</script>
