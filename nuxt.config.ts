export default defineNuxtConfig({
  ssr: false,
  modules: ["@nuxtjs/eslint-module", "@element-plus/nuxt"],
  elementPlus: {
    importStyle: "scss",
    themes: ["dark"],
  },
  css: ["@/assets/main.css"],
  app: {
    head: {
      title: "Admin",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;500;700&display=swap",
        },
      ],
    },
  },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
});
