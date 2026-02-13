import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  name: "kanban-ui-layer",
  compatibilityDate: "2025-07-15",
  // Tell Nuxt to automatically include the Tailwind engine
  // in ANY app that extends this layer
  vite: {
    plugins: [tailwindcss()],
  },
  css: [
    // This injects the CSS file automatically
    new URL("./assets/css/tailwind.css", import.meta.url).pathname,
  ],
});
