// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  extends: ["@kanban/ui"],
  ssr: true,
  devtools: { enabled: true },
});
