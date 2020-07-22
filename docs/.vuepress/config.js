/*
 * @Description: 公共配置文件
 * @Date: 2020-04-22 11:36:42
 * @Author: 黄龙
 * @LastEditors: 黄龙
 * @LastEditTime: 2020-07-22 14:34:42
 */
module.exports = {
  title: 'UnionBigData, Doc.',
  description: '📦 🎨 A api-friendly theme for VuePress.',
  theme: 'api',
  base: '/',
  locales: {
    '/': {
      lang: 'zh-hans',
      title: 'UnionBigData, Doc.',
      text: '中文',
      description: '📦 🎨 一个面向 RESTful API 设计的开箱即用主题。',
    },
  },
  plugins: [
    [
      'vuepress-plugin-medium-zoom',
      {
        selector: '.my-wrapper .my-img',
        delay: 1000,
        options: {
          margin: 24,
          background: '#BADA55',
          scrollOffset: 0,
        },
      },
    ],
  ],
}