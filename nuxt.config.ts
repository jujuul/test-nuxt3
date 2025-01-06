// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  // css: ['~/assets/css/base.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/css/base.scss" as *;'
        }
      }
    }
  },
  runtimeConfig: {
    public: {
      baseURL: "localhost:8080"
    }
  },
  modules: [
    '@element-plus/nuxt',]
})
