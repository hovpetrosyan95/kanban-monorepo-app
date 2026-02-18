import { defineStore } from "pinia";
import { ref } from "vue";
import type { Task, CreateTaskInput, TaskStatus } from "../types/kanban";
import { Haptics, ImpactStyle, NotificationType } from "@capacitor/haptics";

export const useKanbanStore = defineStore(
  "kanban",
  () => {
    const tasks = ref<Task[]>([]);

    /**
     * 🛡️ Private Haptic Helper
     * Wraps native calls in try/catch to prevent the app from
     * crashing on web browsers or unsupported devices.
     */
    const triggerHaptic = async (
      type: "impact" | "notification",
      style: ImpactStyle | NotificationType,
    ) => {
      try {
        if (type === "impact") {
          await Haptics.impact({ style: style as ImpactStyle });
        } else {
          await Haptics.notification({ type: style as NotificationType });
        }
      } catch (e) {
        // Silently ignore: Haptics are a "nice-to-have" UI enhancement
        console.warn("Haptic feedback not available", e);
      }
    };

    const createTask = async (input: CreateTaskInput) => {
      const newTask: Task = {
        ...input,
        id: crypto.randomUUID(),
        createdAt: new Date().toISOString(),
      };
      tasks.value.push(newTask);

      await triggerHaptic("notification", NotificationType.Success);
    };

    const updateTask = async (id: string, updates: Partial<Task>) => {
      const index = tasks.value.findIndex((t: Task) => t.id === id);
      if (index !== -1) {
        tasks.value[index] = { ...tasks.value[index], ...updates };

        await triggerHaptic("impact", ImpactStyle.Light);
      }
    };

    const deleteTask = async (id: string) => {
      tasks.value = tasks.value.filter((t: Task) => t.id !== id);

      await triggerHaptic("notification", NotificationType.Warning);
    };

    const updateStatus = async (id: string, newStatus: TaskStatus) => {
      const task = tasks.value.find((t: Task) => t.id === id);
      if (task && task.status !== newStatus) {
        task.status = newStatus;

        await triggerHaptic("impact", ImpactStyle.Medium);
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
