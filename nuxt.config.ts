// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt'
  ],
  tailwindcss: {
      cssPath: '~/assets/css/input.css'
  },
  alias: {
    pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs"
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false
    },
    {
      path: '~/components/layouts',
      pathPrefix: false
    },
    {
      path: '~/components/partials',
      pathPrefix: false
    }
  ]
})