(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{714:function(t,e,a){"use strict";a.r(e);var r=a(1),n=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"git-常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-常用命令","aria-hidden":"true"}},[t._v("#")]),t._v(" git 常用命令")]),a("p",[a("a",{attrs:{href:"http://www.bootcss.com/p/git-guide/",target:"_blank",rel:"noopener noreferrer"}},[t._v("git - 简易指南")]),a("a",{attrs:{href:"https://www.liaoxuefeng.com/wiki/896043488029600",target:"_blank",rel:"noopener noreferrer"}},[t._v("廖雪峰 git 教程")]),a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("阮一峰常用 git 命令清单")])]),a("h3",{attrs:{id:"添加文件："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加文件：","aria-hidden":"true"}},[t._v("#")]),t._v(" 添加文件：")]),a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" add "),a("span",{attrs:{class:"token keyword"}},[t._v(".")]),t._v("\n")])]),a("h3",{attrs:{id:"commit："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commit：","aria-hidden":"true"}},[t._v("#")]),t._v(" commit：")]),a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{attrs:{class:"token string"}},[t._v("''")]),t._v("\n")])]),a("h3",{attrs:{id:"commit-信息前缀"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commit-信息前缀","aria-hidden":"true"}},[t._v("#")]),t._v(" commit 信息前缀:")]),a("ol",[a("li",[t._v("feat：新功能（feature）")]),a("li",[t._v("fix：修补 bug")]),a("li",[t._v("docs：文档（documentation）")]),a("li",[t._v("style：格式（一些不影响功能的代码变动）")]),a("li",[t._v("refactor：重构")]),a("li",[t._v("test：增加测试")]),a("li",[t._v("chore：构建过程或者辅助工具变动")])]),a("h3",{attrs:{id:"添加"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加","aria-hidden":"true"}},[t._v("#")]),t._v(" 添加")]),a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" push\n")])]),a("h3",{attrs:{id:"拉取"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拉取","aria-hidden":"true"}},[t._v("#")]),t._v(" 拉取")]),a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" pull\n")])]),a("h3",{attrs:{id:"分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分支","aria-hidden":"true"}},[t._v("#")]),t._v(" 分支")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("1. 查看分支 git branch\n2. 创建分支 git branch <name>\n3. 切换分支 git checkout <name>\n4. 上传分支 git push --set-upstream origin <name>\n5. 创建&切换 git checkout -b <name>\n6. 合并分支 git merge <name>\n7. 删除分支 git branch -d <name>\n8. 删除远程分支 git branch -D <name>\n")])]),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/carfge/article/details/79691360",target:"_blank",rel:"noopener noreferrer"}},[t._v("拉取远程分支到本地")])]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("1. 初始化 git init\n2. 同远程建立连接 git remote add origin <url>\n3. 远程分支拉取到本地 git fetch origin <name> （name 为远程仓库分支名）\n4. 本地创建分支 test 并切换到该分支 git checkout -b test origin/dev\n   1. test 为本地新建分支 dev 为远程分支名\n5. 将某分支拉取到本地 git pull origin <name>\n6. 本地上传到远程 git push origin <name>\n")])]),a("h3",{attrs:{id:"tag-标签"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tag-标签","aria-hidden":"true"}},[t._v("#")]),t._v(" tag 标签")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("1. 创建新标签 git tag <name>\n2. 指定标签信息 git tag\n3. Tag 添加附属信息 git tag -a V1.2 -m '附加信息'\n4. 提交 tag 到远程 git push origin <name>\n")])]),a("h3",{attrs:{id:"报错处理："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#报错处理：","aria-hidden":"true"}},[t._v("#")]),t._v(" 报错处理：")]),a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("  dist/vue-ssr-client-manifest.json: needs merge\n  dist/vue-ssr-server-bundle.json: needs merge\n  error: you need to resolve your current index first\n\n  "),a("span",{attrs:{class:"token comment"}},[t._v("#报错处理")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --merge\n")])])])}],!1,null,null,null);e.default=n.exports}}]);