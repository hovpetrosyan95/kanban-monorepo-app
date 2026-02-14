import { defineStore } from "pinia";
import type { Task, CreateTaskInput } from "../types/kanban";
import "pinia-plugin-persistedstate";

export const useKanbanStore = defineStore(
  "kanban",
  () => {
    const tasks = ref<Task[]>([]);

    // Action to create a task
    const createTask = (input: CreateTaskInput) => {
      const newTask: Task = {
        ...input,
        id: crypto.randomUUID(), // Generate unique ID
        createdAt: new Date().toISOString(),
      };
      tasks.value.push(newTask);
    };

    return { tasks, createTask };
  },
  {
    persist: { storage: import.meta.client ? localStorage : undefined },
  },
);
