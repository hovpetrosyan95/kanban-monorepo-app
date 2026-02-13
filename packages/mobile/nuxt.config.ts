// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // 1. Inherit everything (Tailwind plugin, CSS, Components, Pages)
  extends: ["@kanban/ui"],

  // 2. Platform specific overrides
  ssr: false,

  app: {
    baseURL: "./",
    buildAssetsDir: "assets",
  },

  nitro: {
    output: { publicDir: "dist" },
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
});
