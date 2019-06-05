(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{714:function(t,a,e){"use strict";e.r(a);var r=e(1),s=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"git-常用命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-常用命令","aria-hidden":"true"}},[t._v("#")]),t._v(" git 常用命令")]),e("p",[e("a",{attrs:{href:"http://www.bootcss.com/p/git-guide/",target:"_blank",rel:"noopener noreferrer"}},[t._v("git - 简易指南")])]),e("h3",{attrs:{id:"添加文件："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#添加文件：","aria-hidden":"true"}},[t._v("#")]),t._v(" 添加文件：")]),e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" add "),e("span",{attrs:{class:"token keyword"}},[t._v(".")]),t._v("\n")])]),e("h3",{attrs:{id:"commit："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#commit：","aria-hidden":"true"}},[t._v("#")]),t._v(" commit：")]),e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),e("span",{attrs:{class:"token string"}},[t._v("''")]),t._v("\n")])]),e("h3",{attrs:{id:"commit-信息前缀"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#commit-信息前缀","aria-hidden":"true"}},[t._v("#")]),t._v(" commit 信息前缀:")]),e("ol",[e("li",[t._v("feat：新功能（feature）")]),e("li",[t._v("fix：修补 bug")]),e("li",[t._v("docs：文档（documentation）")]),e("li",[t._v("style：格式（一些不影响功能的代码变动）")]),e("li",[t._v("refactor：重构")]),e("li",[t._v("test：增加测试")]),e("li",[t._v("chore：构建过程或者辅助工具变动")])]),e("h3",{attrs:{id:"添加"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#添加","aria-hidden":"true"}},[t._v("#")]),t._v(" 添加")]),e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" push\n")])]),e("h3",{attrs:{id:"拉取"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#拉取","aria-hidden":"true"}},[t._v("#")]),t._v(" 拉取")]),e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" pull\n")])]),e("h3",{attrs:{id:"分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分支","aria-hidden":"true"}},[t._v("#")]),t._v(" 分支")]),e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("1. 查看分支 git branch\n2. 创建分支 git branch <name>\n3. 切换分支 git checkout <name>\n4. 上传分支 git push --set-upstream origin <name>\n5. 创建&切换 git checkout -b <name>\n6. 合并分支 git merge <name>\n7. 删除分支 git branch -d <name>\n8. 删除远程分支 git branch -D <name>\n")])]),e("p",[e("a",{attrs:{href:"https://blog.csdn.net/carfge/article/details/79691360",target:"_blank",rel:"noopener noreferrer"}},[t._v("拉取远程分支到本地")])]),e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("1. 初始化 git init\n2. 同远程建立连接 git remote add origin <url>\n3. 远程分支拉取到本地 git fetch origin <name> （name 为远程仓库分支名）\n4. 本地创建分支 test 并切换到该分支 git checkout -b test origin/dev\n   1. test 为本地新建分支 dev 为远程分支名\n5. 将某分支拉取到本地 git pull origin <name>\n6. 本地上传到远程 git push origin <name>\n")])]),e("h3",{attrs:{id:"tag-标签"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tag-标签","aria-hidden":"true"}},[t._v("#")]),t._v(" tag 标签")]),e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("1. 创建新标签 git tag <name>\n2. 指定标签信息 git tag\n3. Tag 添加附属信息 git tag -a V1.2 -m '附加信息'\n4. 提交 tag 到远程 git push origin <name>\n")])]),e("h3",{attrs:{id:"报错处理："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#报错处理：","aria-hidden":"true"}},[t._v("#")]),t._v(" 报错处理：")]),e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("  dist/vue-ssr-client-manifest.json: needs merge\n  dist/vue-ssr-server-bundle.json: needs merge\n  error: you need to resolve your current index first\n\n  "),e("span",{attrs:{class:"token comment"}},[t._v("#报错处理")]),t._v("\n  "),e("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --merge\n")])])])}],!1,null,null,null);a.default=s.exports}}]);