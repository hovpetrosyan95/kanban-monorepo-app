import { defineStore } from "pinia";
import type { Task, CreateTaskInput, TaskStatus } from "../types/kanban";
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

    const updateStatus = (id: string, newStatus: TaskStatus) => {
      const task = tasks.value.find((t: Task) => t.id === id);
      if (task) {
        task.status = newStatus;
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
    persist: { storage: import.meta.client ? localStorage : undefined },
  },
);
