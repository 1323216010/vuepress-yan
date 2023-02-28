const { text } = require("express");

module.exports = {
  title: '我的幻想乡',
  description: 'Just playing around',
  themeConfig: {
    /*     sidebar: {
          '/document/Java/': [
            '', 
            'js', 
          ],
        }, */
    sidebar: [
      {
        title: '回到首页',
        path: '/',
      },
      {
        title: 'JavaScript',
        path: '/document/JavaScript/',
        children: [
          {
            title: '子页',
            path: '/document/JavaScript/js',
          },
        ]
      }
    ],
    nav: [
      {
        text: '文档',
        items: [
          { text: 'Java', link: './document/Java/index.md' },
          { text: 'Golang', link: './document/Golang/index.md' },
          { text: 'Python', link: './document/Python/index.md' },
          { text: 'JavaScript', link: './document/JavaScript/index.md' },
          { text: 'Vue', link: './document/Vue/index.md' }
        ]
      },
      {
        text: '代码生成器',
        items: [
          { text: 'R风格', link: 'https://vue3-frame.vercel.app/tool/gen' },
          { text: 'G风格', link: 'https://vue3-frame.vercel.app/autoCode' },
        ]
      },
      { text: 'External', link: 'https://google.com' },
    ]
  }
}