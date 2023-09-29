// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [ '@nuxt/content', 'nuxt-quasar-ui', '@nuxtjs/i18n' ],
  quasar: {
    extras: {
      fontIcons: [
        'mdi-v7',
      ]
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "~/assets/quasar-variables.sass" as *;`
        }
      }
    }
  },
  runtimeConfig: {
    apiKey: "hoge",
  }
})
