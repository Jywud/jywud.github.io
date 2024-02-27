---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: 大鱼历险记
  text: 工作生活的成长之路
  tagline: 路漫漫其修远兮，吾将上下而求索
  image:
    src: /home-img.png
    alt: dy
  actions:
    - theme: brand
      text: 没想好
      link: /guide/markdown-examples
    - theme: alt
      text: gitee
      link: https://gitee.com/jywud314

features:
  - icon: 🏳️‍🌈
    title: 机遇只眷有备者
    details: 机遇来临时，只有准备充分的人才能抓住它。
  - icon: 🆙
    title: 坚持铸就辉煌
    details: 成功在于不懈坚持，毅力成就辉煌人生。
  - icon: 🚩
    title: 心态决定成败
    details: 积极乐观的心态是成功的关键，心态决定一切。
---

<p style="text-align:center;color:red;margin-top:100px">本站正在逐步完善，欢迎大家关注我的微信公众号，及时获取前端技术推文</p>
<div :class="$style.wx_gzh_wrap">
  <img :class="$style.wx_gzh_img" src="/wx.png" />
</div>

<style module>
.wx_gzh_wrap{
  text-align: center;
}
.wx_gzh_img{
  width: 400px;
  display: inline-block;
}
</style>
