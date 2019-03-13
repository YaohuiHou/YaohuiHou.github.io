module.exports = {

  // title: 'Rancho个人主页',
  // description: '记录生活，记录成长',
  base: '/rancho/',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Rancho Life',
      description: '记录生活，记录成长。'
    }
  },
  head: [
    ['link', {
      rel: 'icon',
      href: '/img/favicon.ico'
    }]
  ],
  //mac下port未生效
  port: 8080,
  serviceWorker: true,
  ga: 'UA-136059685-1', //你的Google Analytics ID
  // ga: 'UA-136059685-1',
  markdown: {
    lineNumbers: true
  },

  themeConfig: {
    //gitc 仓库地址
    repo: 'https://github.com/YaohuiHou/YaohuiHou.github.io',
    //导航栏
    nav: [{
        text: 'Home',
        link: '/'
      },
      {
        text: '技术笔记',
        items: [{
            text: 'Html+CSS',
            link: '/Html+CSS/'
          },
          {
            text: 'JavaScript',
            link: '/JavaScript/'
          },
          {
            text: 'Node',
            link: '/Node/'
          },
          {
            text: 'SQL',
            link: '/SQL/'
          },
          {
            text: 'Python',
            link: '/Python/'
          },
        ]
      },
      {
        text: '个人文章',
        items: [{
            text: '情感专访',
            link: '/article/test1/'
          },
          {
            text: '星座占卜',
            link: '/article/test2/'
          },
        ]
      },
    ],
    // sidebar: 'auto',
    sidebar: {
      '/JavaScript/': [
        'string',
        'array',
        'object',
      ],
      '/Python/': [
        '函数'
      ]
    },
    //搜索
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: true, // string | boolean
    displayAllHeaders: true,
    // 主题级别的 serviceWorker
    serviceWorker: {
      // Boolean | Object, 默认值是 undefined.
      updatePopup: {
        message: "页面有更新哦~",
        buttonText: "更新"
      }
      // 如果设置为 true, 默认的文本配置将是: 
      // updatePopup: { 
      //    message: "New content is available.", 
      //    buttonText: "Refresh" 
      // }
    },
    // 自定义项目仓库链接文字
    // 默认根据 `themeConfig.repo` 中的 URL 来自动匹配是 "GitHub"/"GitLab"/"Bitbucket" 中的哪个，如果不设置时是 "Source"。
    repoLabel: '贡献代码！',

    // 以下为可选的 "Edit this page" 链接选项

    // 如果你的文档和项目位于不同仓库：
    docsRepo: 'YaohuiHou/YaohuiHou.github.io',
    // 如果你的文档不在仓库的根目录下：
    docsDir: 'docs',
    // 如果你的文档在某个特定的分支（默认是 'master' 分支）：
    docsBranch: 'master',
    // 默认为 false，设置为 true 来启用
    editLinks: true,
    // 自定义编辑链接的文本。默认是 "Edit this page"
    editLinkText: '帮助我们改进页面内容！'
  }
}