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
        title: '回到首页',   // 必要的
        path: '/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
      },
      {
        title: 'Java',   // 必要的
        path: '/document/Java/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        children: [
          {
            title: '子页',   // 必要的
            path: '/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
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
      { text: '代码生成器', link: 'https://vue3-frame.vercel.app/tool/gen' },
      { text: 'External', link: 'https://google.com' },
    ]
  }
}