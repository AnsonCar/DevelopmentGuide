import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: './src',
  base: '/DevelopmentGuide/',
  title: "Development Guide",
  description: "Development guide book for developers",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '項目管理', link: '/development/overview'},
      { text: '技術管理', link: '/technology/overview'},
      { text: '路線圖', link: '/roadmap'},
    ],

    sidebar: {
      '/development' : [
        { text: '項目管理', link: '/development/overview'},
        { text: '項目原則', link: '/development/principle'},
        { text: '項目流程', link: '/development/flow'},
        { text: '開發方法', link: '/development/agile'},
        { text: '項目管理工具', link: '/development/tool'},
        { text: 'UI設計工具', link: '/development/ui_tool'},
        { text: '總結', link: '/development/end'}
      ],
      '/technology': [
        { text: '開發管理', link: '/technology/overview'},
        { text: '模組化設計', link: '/technology/modules'},
        { text: 'API風格', link: '/technology/api_style'},
        { text: 'API規範', link: '/technology/api_format'},
        { text: '版本管理', link: '/technology/use_git'},
      ]
    },
    footer: {
      message: 'Design By AnsonCar',
      copyright: 'Copyright © 2024 Carhyme | Cetopus | New3Hor'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/AnsonCar/DevelopmentGuide' }
    ]
  },
})
