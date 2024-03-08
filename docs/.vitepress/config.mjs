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
      {
        text: '前端文章',
        items: [
          {
            text: '前端基础',
            link: 'https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzI3NDkxNTQ3OQ==&action=getalbum&album_id=2827086369561870340#wechat_redirect'
          },
          {
            text: 'vue3系列',
            link: 'https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzI3NDkxNTQ3OQ==&action=getalbum&album_id=3096273610228465667#wechat_redirect'
          },
          {
            text: 'nodejs相关',
            link: 'https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzI3NDkxNTQ3OQ==&action=getalbum&album_id=2365887739981840384#wechat_redirect'
          },
          {
            text: 'react相关',
            link: 'https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzI3NDkxNTQ3OQ==&action=getalbum&album_id=2262938000307453958#wechat_redirect'
          },
          {
            text: 'uniapp/小程序',
            link: 'https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzI3NDkxNTQ3OQ==&action=getalbum&album_id=3012150613608071171#wechat_redirect'
          },
          {
            text: '打包工具',
            link: 'https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzI3NDkxNTQ3OQ==&action=getalbum&album_id=2969030295020732417#wechat_redirect'
          },
          {
            text: '各种工具',
            link: 'https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzI3NDkxNTQ3OQ==&action=getalbum&album_id=3265820619896619012#wechat_redirect'
          },
          {
            text: 'nginx',
            link: 'https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzI3NDkxNTQ3OQ==&action=getalbum&album_id=3195081977901711360#wechat_redirect'
          },
          {
            text: '前端杂项',
            link: 'https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzI3NDkxNTQ3OQ==&action=getalbum&album_id=2838542468404051971#wechat_redirect'
          }
        ]
      },
      {
        text: '提效工具',
        items: [
          { text: '在线工具库', link: '/efficiency/online-tools' },
          { text: 'any-format文档', link: '/efficiency/doc-anyformat' }
        ]
      },
      {
        text: '我的更多',
        items: [
          {
            text: '我的论坛',
            items: [
              { text: '稀土掘金', link: 'https://juejin.cn/user/395479916219517' },
              { text: 'CSDN', link: 'https://blog.csdn.net/wujiayu31415' },
              { text: 'segmentfault', link: 'https://segmentfault.com/u/jywud' }
            ]
          },
          {
            text: '我的开源',
            items: [
              { text: 'github', link: 'https://github.com/Jywud' },
              { text: 'gitee', link: 'https://gitee.com/jywud314' },
              { text: 'gitlab', link: 'https://gitlab.com/Jywud' },
              { text: 'npm', link: 'https://www.npmjs.com/~jywud314' }
            ]
          }
        ]
      }
    ],

    sidebar: {
      '/efficiency/': [
        {
          text: '提效工具',
          items: [
            { text: '在线工具库', link: '/efficiency/online-tools' },
            { text: 'any-format文档', link: '/efficiency/doc-anyformat' }
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
