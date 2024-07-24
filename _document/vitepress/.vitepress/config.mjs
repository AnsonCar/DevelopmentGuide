import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: './src',
  base: '/developmentguide/',
  title: "Development Guide",
  description: "Development guide book for developers",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '路線圖', link: '/roadmap'},
    ],

    sidebar: {
      '/development' : [
        { text: '開發流程', link: '/development/overview'},
        { text: '版本管理', link: '/development/user_git'}
      ]
    },
    footer: {
      message: 'Design By AnsonCar',
      copyright: 'Copyright © 2024 Carhyme | Cetopus | New3Hor'
    },
    socialLinks: [
      // { icon: 'github', link: 'https://github.com/AnsonCar/PiggyFlow' }
    ]
  },
})
