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

    const updateTask = (id: string, updates: Partial<Task>) => {
      const index = tasks.value.findIndex((t: Task) => t.id === id);
      if (index !== -1) {
        tasks.value[index] = { ...tasks.value[index], ...updates };
      }
    };

    const deleteTask = (id: string) => {
      tasks.value = tasks.value.filter((t: Task) => t.id !== id);
    };

    return { tasks, createTask, updateTask, deleteTask };
  },
  {
    persist: { storage: import.meta.client ? localStorage : undefined },
  },
);
