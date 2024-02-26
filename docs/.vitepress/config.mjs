import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/website/',
  title: '大鱼的空间',
  description: '大鱼的个人博客',
  head: [['link', { rel: 'icon', href: '/website/favicon.ico' }]],
  outDir: '../dist',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/favicon.ico',
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/markdown-examples' },
      { text: '测试', link: '/more/test' },
      {
        text: '更多',
        items: [{ text: '百度', link: 'https://www.baidu.com' }]
      }
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Examples1',
          collapsed: true,
          items: [
            { text: 'Markdown Examples', link: '/guide/markdown-examples' },
            { text: 'Runtime API Examples', link: '/guide/api-examples' }
          ]
        }
      ],
      '/more/': [
        {
          text: 'Test',
          items: [{ text: 'test', link: '/more/test' }]
        }
      ]
    },
    // [
    //   {
    //     text: 'Examples1',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    socialLinks: [{ icon: 'github', link: 'https://gitee.com/jywud314' }],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present dayu'
    },

    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    }
  }
});
