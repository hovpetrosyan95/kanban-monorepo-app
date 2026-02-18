export const TASK_MODAL_CONTENT = {
  header: {
    create: "New Task",
    edit: "Edit Task",
  },
  inputs: {
    title: {
      label: "Task Name",
      placeholder: "What needs to be done?",
    },
    description: {
      label: "Details",
      placeholder: "Add more context here...",
    },
    priority: {
      label: "Priority Level",
    },
  },
  actions: {
    cancel: "Cancel",
    create: "Create Task",
    save: "Update Changes",
  },
} as const;

export const HAPTIC_STRENGTHS = {
  NONE: "none",
  LIGHT: "light",
  MEDIUM: "medium",
  HEAVY: "heavy",
} as const;
