import { defineStore } from "pinia";
import type { Task, CreateTaskInput } from "../types/kanban";

export const useKanbanStore = defineStore("kanban", () => {
  const tasks = ref<Task[]>([]);

  // Action to create a task
  const createTask = (input: CreateTaskInput) => {
    const newTask: Task = {
      ...input,
      id: crypto.randomUUID(), // Generate unique ID
      createdAt: new Date().toISOString(),
    };
    tasks.value.push(newTask);
    console.log("Task Created:", newTask);
  };

  return { tasks: readonly(tasks), createTask };
});
