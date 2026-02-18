import { defineStore } from "pinia";
import { ref } from "vue";
import type { Task, CreateTaskInput, TaskStatus } from "../types/kanban";
import { useHaptics } from "../composables/useHaptics";

export const useKanbanStore = defineStore(
  "kanban",
  () => {
    const tasks = ref<Task[]>([]);
    const { trigger, success, warning } = useHaptics();

    const createTask = async (input: CreateTaskInput) => {
      const newTask: Task = {
        ...input,
        id: crypto.randomUUID(),
        createdAt: new Date().toISOString(),
      };
      tasks.value.push(newTask);

      await success();
    };

    const updateTask = async (id: string, updates: Partial<Task>) => {
      const index = tasks.value.findIndex((t: Task) => t.id === id);
      if (index !== -1) {
        tasks.value[index] = { ...tasks.value[index], ...updates };

        await trigger("impact", "light");
      }
    };

    const deleteTask = async (id: string) => {
      tasks.value = tasks.value.filter((t: Task) => t.id !== id);

      await warning();
    };

    const updateStatus = async (id: string, newStatus: TaskStatus) => {
      const task = tasks.value.find((t: Task) => t.id === id);
      if (task && task.status !== newStatus) {
        task.status = newStatus;

        await trigger("impact", "medium");
      }
    };

    const getTasksByStatus = (status: TaskStatus) => {
      return tasks.value.filter((t: Task) => t.status === status);
    };

    return {
      tasks,
      createTask,
      updateTask,
      deleteTask,
      updateStatus,
      getTasksByStatus,
    };
  },
  {
    persist: {
      storage: import.meta.client ? localStorage : undefined,
    },
  },
);
