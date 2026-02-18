<script setup lang="ts">
const { open } = useTaskModal();
</script>

<template>
  <div class="hidden lg:flex items-center justify-between mb-10">
    <div class="space-y-1">
      <TextTitle> Workflow </TextTitle>
      <Text class="text-sm text-text-muted font-medium opacity-50">
        Drag cards to reorganize
      </Text>
    </div>
    <Button
      variant="primary"
      class="px-8 shadow-xl shadow-brand/20"
      @click="open()"
    >
      Add Task
    </Button>
  </div>
</template>
