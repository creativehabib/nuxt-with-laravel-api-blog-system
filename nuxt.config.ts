// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "@nuxtjs/tailwindcss",
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    ],

    imports:{
      dirs: ['./stores'],
    },

    pinia: {
      storesDirs: ['./stores/**', './custom-folder/stores/**'],
    },


  app:{
    head: {
      title: 'Nuxt Js CRUD',
      meta: [
        {charset: 'utf-8'},
        {name: 'viewport',content: 'width-device-width, initial-scale=1'},
        {hid: 'description', name: 'description', content: 'NUXT 3 CRUD Application meta desc'},
        {name: 'format-detection', content: 'telephone=no'}
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap'
        },
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico'
        }
      ],
      script: [
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js',
          type: 'text/javascript'
        }
      ]
    }
  }


})