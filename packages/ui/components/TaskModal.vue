<script setup lang="ts">
import { STATUS_MAP, TASK_PRIORITIES, TASK_STATUSES } from "../constants/task";
import { TASK_MODAL_CONTENT } from "../constants/ui";

const { isOpen, form, close, editingId } = useTaskModal();
const kanbanStore = useKanbanStore();

const content = TASK_MODAL_CONTENT;

const handleSave = () => {
  if (!form.title.trim()) return;

  if (editingId.value) {
    kanbanStore.updateTask(editingId.value, { ...form });
  } else {
    kanbanStore.createTask({ ...form });
  }

  close();
};
</script>

<template>
  <Teleport to="body">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-[100] flex items-end justify-center lg:items-center"
    >
      <div
        class="absolute inset-0 bg-text-main/40 backdrop-blur-sm transition-opacity"
        @click="close"
      />

      <div
        class="relative w-full rounded-t-[32px] bg-card-bg p-6 pb-12 shadow-2xl transition-all duration-300 lg:w-[480px] lg:rounded-3xl lg:p-8"
      >
        <!-- Mobile Drag Handle -->
        <div class="mx-auto mb-6 h-1.5 w-12 rounded-full bg-border lg:hidden" />
        <Form @submit="handleSave">
          <header class="flex items-center justify-between">
            <TextTitle size="md">
              {{ editingId ? content.header.edit : content.header.create }}
            </TextTitle>

            <Button variant="ghost" class="!h-10 !w-10 !p-0" @click="close">
              <span class="i-heroicons-x-mark-20-solid h-6 w-6" />
            </Button>
          </header>
          <Input
            v-model="form.title"
            :placeholder="content.inputs.title.placeholder"
            required
          />

          <Input
            v-model="form.description"
            as="textarea"
            :placeholder="content.inputs.description.placeholder"
            rows="3"
          />
          <div class="space-y-3">
            <Text
              variant="label"
              class="px-1 text-[10px] uppercase tracking-widest opacity-50"
            >
              {{ content.inputs.priority.label }}
            </Text>

            <div class="space-y-3">
              <Text
                variant="label"
                class="px-1 text-[10px] uppercase tracking-widest opacity-50"
              >
                Task Status
              </Text>

              <div class="flex gap-2">
                <Button
                  v-for="statusId in TASK_STATUSES"
                  :key="statusId"
                  type="button"
                  :variant="form.status === statusId ? 'primary' : 'secondary'"
                  class="flex-1 !py-4 !rounded-2xl transition-all flex items-center justify-center gap-2"
                  @click="form.status = statusId"
                >
                  <div
                    :class="[
                      STATUS_MAP[statusId].color,
                      'h-1.5 w-1.5 rounded-full',
                    ]"
                  />

                  <span class="text-[11px] font-bold uppercase tracking-tight">
                    {{ STATUS_MAP[statusId].label }}
                  </span>
                </Button>
              </div>
            </div>

            <div class="flex gap-2">
              <Button
                v-for="option in TASK_PRIORITIES"
                :key="option"
                type="button"
                :variant="form.priority === option ? 'primary' : 'secondary'"
                class="flex-1 !py-4 !rounded-2xl transition-all"
                @click="form.priority = option"
              >
                <Priority :value="option" />
              </Button>
            </div>
          </div>
          <template #actions>
            <Button
              type="button"
              variant="secondary"
              class="flex-1"
              @click="close"
            >
              {{ content.actions.cancel }}
            </Button>

            <Button type="submit" variant="primary" class="flex-1">
              {{ editingId ? content.actions.save : content.actions.create }}
            </Button>
          </template>
        </Form>
      </div>
    </div>
  </Teleport>
</template>
