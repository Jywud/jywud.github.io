import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/website/',
  title: '大鱼历险记',
  description: '大鱼的个人博客',
  head: [['link', { rel: 'icon', href: '/website/favicon.ico' }]],
  outDir: '../dist',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/favicon.ico',
    search: {
      provider: 'local'
    },
    nav: [
      { text: '首页', link: '/' },
      // { text: '指南', link: '/guide/markdown-examples' },
      // { text: '测试', link: '/more/test' },
      { text: '提效工具', items: [{ text: '在线工具', link: '/efficiency/tools' }] },
      {
        text: '更多站点',
        items: [
          { text: '稀土掘金', link: 'https://juejin.cn/user/395479916219517' },
          { text: 'csdn', link: 'https://blog.csdn.net/wujiayu31415?spm=1000.2115.3001.5343' },
          { text: 'segmentfault', link: 'https://segmentfault.com/u/jywud' }
        ]
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

    socialLinks: [{ icon: 'github', link: 'https://github.com/Jywud' }],

    footer: {
      message: '如有转载或 CV 的请标注本站原文地址',
      copyright: 'Copyright © 2019-present dayu'
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
