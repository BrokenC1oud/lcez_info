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
      { text: 'FAQ', link: '/FAQ' },
      { text: '关于学校', link: '/about' },
      { text: '社交媒体', link: '/social' }
    ],

    sidebar: [
      { text: '关于学校', link: '/about' },
      { text: 'FAQ', link: '/FAQ' },
      {
        text: '社交媒体',
        link: '/social',
        items: [
          { text: '群聊', link: '/social/groups' },
        ]
      },
      { text: '本站', link: '/contact' },
      { text: '名人堂', link: '/shame' },
      { text: 'Todo', link: '/todo' },
      { text: '致谢', link: '/credit' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/BrokenC1oud/lcez_info' }
    ]
  }
})
