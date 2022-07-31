export default {
  ssr: true,
  head: {
    title: "서로맑음",
    htmlAttrs: {
      lang: "ko-KR"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "format-detection", content: "telephone=no" },
      {
        hid: "title",
        name: "title",
        content: "디자이너 서로맑음 이상준"
      },
      {
        hid: "description",
        name: "description",
        content: "디자이너 서로맑음 이상준"
      },
      {
        name: "keyword",
        content: "디자이너 서로맑음 이상준"
      },
      {
        hid: "og:image",
        name: "og:image",
        property: "og:image",
        content: "/og-mage.png"
      },
      {
        hid: "og:title",
        name: "og:title",
        property: "og:title",
        content: "디자이너 서로맑음 이상준"
      },
      {
        hid: "og:description",
        name: "og:description",
        property: "og:description",
        content: "UI/UX, Branding, Calligraphy, Graphic"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "apple-touch-icon",
        href: "/favicon/apple-icon-57x57.png"
      },
      {
        rel: "apple-touch-icon",
        href: "/favicon/apple-icon-60x60.png"
      },
      {
        rel: "apple-touch-icon",
        href: "/favicon/apple-icon-72x72.png"
      },
      {
        rel: "apple-touch-icon",
        href: "/favicon/apple-icon-76x76.png"
      },
      {
        rel: "apple-touch-icon",
        href: "/favicon/apple-icon-114x114.png"
      },
      {
        rel: "apple-touch-icon",
        href: "/favicon/apple-icon-120x120.png"
      },
      {
        rel: "apple-touch-icon",
        href: "/favicon/apple-icon-144x144.png"
      },
      {
        rel: "apple-touch-icon",
        href: "/favicon/apple-icon-152x152.png"
      },
      {
        rel: "apple-touch-icon",
        href: "/favicon/apple-icon-180x180.png"
      },
      {
        rel: "icon",
        type: "image/png",
        href: "/favicon/android-icon-192x192.png"
      },
      {
        rel: "icon",
        type: "image/png",
        href: "/favicon/favicon-32x32.png"
      },
      {
        rel: "icon",
        type: "image/png",
        href: "/favicon/favicon-96x96.png"
      },
      {
        rel: "icon",
        type: "image/png",
        href: "/favicon/favicon-16x16.png"
      }
    ]
    // script: [
    //   {
    //     src: "https://www.gstatic.com/firebasejs/7.23.0/firebase-app.js",
    //     defer: "true"
    //   },
    //   {
    //     src: "https://www.gstatic.com/firebasejs/7.23.0/firebase-auth.js",
    //     defer: "true"
    //   },
    //   {
    //     src: "https://www.gstatic.com/firebasejs/7.23.0/firebase-storage.js",
    //     defer: "true"
    //   },
    //   {
    //     src: "https://www.gstatic.com/firebasejs/7.23.0/firebase-firestore.js",
    //     defer: "true"
    //   },
    //   {
    //     src: "https://www.gstatic.com/firebasejs/7.23.0/firebase-analytics.js",
    //     defer: "true"
    //   },
    //   {
    //     src: "https://www.gstatic.com/firebasejs/7.23.0/firebase-analytics.js",
    //     defer: "true"
    //   },
    //   {
    //     src: "https://www.gstatic.com/firebasejs/7.23.0/firebase-analytics.js",
    //     defer: "true"
    //   }
    // ]
  },

  dev: process.env.NODE_ENV === "development",

  css: [
    {
      src: "@/assets/styles/index.scss",
      lang: "scss"
    }
  ],

  plugins: [
    { src: "@/plugins/common.js" },
    { src: "@/plugins/firebase.js" }
    // { src: "@/plugins/three.js", ssr: false }
  ],

  components: true,

  buildModules: [],
  build: {
    transpile: ["three"]
  },
  buildDir: "client",
  generate: {
    dir: "dist"
  },

  modules: ["bootstrap-vue/nuxt", "@nuxtjs/style-resources"],

  styleResources: {
    scss: ["@/assets/styles/variables.scss"]
  },
  bootstrapVue: {
    // bootstrapCSS: false,
    // bootstrapVueCSS: false
  },

  axios: {},
  loading: {
    color: "#ededed"
  }
};
