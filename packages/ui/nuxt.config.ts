import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "node:url";

export default defineNuxtConfig({
  name: "kanban-ui-layer",
  compatibilityDate: "2025-07-15",
  // Tell Nuxt to automatically include the Tailwind engine
  // in ANY app that extends this layer
  vite: {
    plugins: [tailwindcss()],
  },

  modules: ["@unocss/nuxt", "@pinia/nuxt"],
  imports: { dirs: ["stores"] },
  unocss: {
    icons: true, // Enables the i- prefix for icons
  },

  // This line tells Nuxt: "Scan the components folder in this layer"
  components: [
    {
      path: fileURLToPath(new URL("./components", import.meta.url)),
      pathPrefix: false, // Allows <Navbar /> instead of <UiNavbar />
    },
  ],
  css: [
    // This injects the CSS file automatically
    new URL("./assets/css/tailwind.css", import.meta.url).pathname,
  ],
});
