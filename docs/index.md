---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: 大鱼的空间
  text: 一起成长一起进步
  tagline: 人生如旅程，不在于目的地，而在于沿途的风景和经历
  actions:
    - theme: brand
      text: guide
      link: /guide/markdown-examples
    - theme: alt
      text: test Examples
      link: /more/test

features:
  - title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

<div :class="$style.wx_gzh_wrap">
  <img :class="$style.wx_gzh_img" src="/wx.png" />
</div>

<style module>
.wx_gzh_wrap{
  text-align: center;
  margin: 40px;
}
.wx_gzh_img{
  width: 400px;
  display: inline-block;
}
</style>
