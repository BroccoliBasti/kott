// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],

  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }]
    },
  },
  
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    "@nuxtjs/i18n",
    "@nuxt/icon",
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxt/image"
  ],

  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  },

  typescript: {
    includeWorkspace: true,
    tsConfig: {
      compilerOptions: {
        baseUrl: '.'
      }
    }
  },

  i18n: {
    locales: ['en', 'sv'],
    strategy: 'prefix_except_default',
    defaultLocale: 'sv'
  }
})