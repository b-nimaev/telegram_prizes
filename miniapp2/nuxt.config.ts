// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: [
    // Подключаем стили из node_modules
    "bootstrap/dist/css/bootstrap.min.css",
  ],
  app: {
    head: {
      script: [
        { src: "https://telegram.org/js/telegram-web-app.js", defer: true },
      ],
    },
  },
  plugins: [
    // Подключаем Bootstrap JavaScript
    { src: "~/plugins/bootstrap.client.ts", mode: "client" },
  ],
  modules: ["@pinia/nuxt"],
});