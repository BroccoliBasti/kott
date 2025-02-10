// https://nuxt.com/docs/api/configuration/nuxt-config

export default {
  compatibilityDate: '2024-04-03',
  ssr: true,
  devtools: { enabled: false },

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }]
    },
  },

  site: {
    trailingSlash: false
  },

  experimental: {
    scanPageMeta: true,
  },
  
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxtjs/i18n",
    '@nuxt/content',
    'nuxt-security'
  ],

  icon: {
    clientBundle: {
      scan: true,
      sizeLimitKb: 256,
    },
  },

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
    baseUrl: 'https://kott.fi',
    locales: [
      {
        code: 'en',
        language: 'en-US',
        name: "English",
        file: 'en-US.json'
      },
      {
        code: 'sv',
        language: 'sv-FI',
        name: "Svenska",
        file: 'sv-FI.json'
      }
    ],
    strategy: 'prefix_except_default',
    lazy: true,
    defaultLocale: 'sv',
    detectBrowserLanguage: {
      useCookie: false
    },
    parsePages: false,
    customRoutes: 'config',
    pages: {
      work: {
        sv: '/arbete',
        en: '/work'
      },
      'work-slug': {
        sv: '/arbete/[...slug]',
        en: '/work/[...slug]'
      },
      privacy: {
        sv: '/integritetspolicy',
        en: '/privacy_policy'
      }
    }
  },

  security: {
    headers: {
      crossOriginEmbedderPolicy: 'require-corp',
      crossOriginOpenerPolicy: 'same-origin', 
      contentSecurityPolicy: {
        'script-src': [
          "'self'",
          "https:",
          "'unsafe-inline'",
          "'unsafe-eval'",
          "'unsafe-hashes'",
          "'strict-dynamic'",
          "'nonce-{{nonce}}'"
        ],
        'script-src-attr': [
          "'self'",
          "https:",
          "'unsafe-inline'",
          "'unsafe-eval'",
          "'unsafe-hashes'",
          "'nonce-{{nonce}}'",
          "data-error"
        ],
      }
    },
  },
}