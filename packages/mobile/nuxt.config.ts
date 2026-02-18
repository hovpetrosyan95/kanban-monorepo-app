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
    head: {
      viewport:
        "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover",
    },
  },

  extends: ["../ui"],
});
