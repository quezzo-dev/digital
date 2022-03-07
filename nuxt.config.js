export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "digital-marketing",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@styles/main.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/fullpage", mode: "client" },
    { src: "~/plugins/vue-awesome-swiper", mode: "client" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules

  modules: ["nuxt-fullpage.js"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  target: "static",
  // router: {
  //   base: "http://quezzo-dev.github.io/DIGITAL-MARKETING",
  // },
};
