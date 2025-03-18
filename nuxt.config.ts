export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image"],
  css: ["~/assets/css/tailwind.css"],
  app: {
    head: {
      title: "Dockrelix • Simple and painless Docker Swarm management UI",
      htmlAttrs: {
        lang: "en",
      },
      script: [
        {
          src: "https://www.googletagmanager.com/gtag/js?id=G-QWQ0PT3243",
          async: true,
        },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QWQ0PT3243');
          `,
          type: "text/javascript",
          crossorigin: "anonymous",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      charset: "utf-16",
      viewport: "width=device-width, initial-scale=1, maximum-scale=1",
    },
  },
});
