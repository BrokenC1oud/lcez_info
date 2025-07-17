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
        items: []
      },
      { text: '本站', link: '/contact' },
      { text: 'Todo', link: '/todo' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/BrokenC1oud/lcez_info' }
    ]
  }
})
