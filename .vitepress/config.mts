import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "LCEZInfo",
  description: "历城二中相关信息",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',
    nav: [
      { text: '主页', link: '/' },
      { text: '群聊', link: '/groups' }
    ],

    sidebar: [
      {
        text: '联系',
        items: [
          { text: '群聊', link: '/groups' },
          { text: '本站', link: '/contact' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/BrokenC1oud/lcez_info' }
    ]
  }
})
