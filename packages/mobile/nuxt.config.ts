export default defineNuxtConfig({
  ssr: false,

  nitro: {
    preset: "static",
    prerender: {
      crawlLinks: true,
      routes: ["/"], // Force generate index.html
    },
  },
  app: {
    baseURL: "./",
    buildAssetsDir: "_nuxt/",
  },

  extends: ["../ui"],
});
