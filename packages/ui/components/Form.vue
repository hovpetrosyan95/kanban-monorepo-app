<template>
  <form @submit.prevent="$emit('submit')" class="flex flex-col gap-6">
    <div class="flex flex-col gap-4">
      <slot />
    </div>
    <div v-if="$slots.actions" class="flex gap-3 pt-2">
      <slot name="actions" />
    </div>
  </form>
</template>

<script setup lang="ts">
defineEmits(["submit"]);
</script>
