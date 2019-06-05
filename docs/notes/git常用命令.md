# git 常用命令

[git - 简易指南](http://www.bootcss.com/p/git-guide/)

### 添加文件：

```bash
git add .
```

### commit：

```bash
git commit -m ''
```

### commit 信息前缀:

1. feat：新功能（feature）
2. fix：修补 bug
3. docs：文档（documentation）
4. style：格式（一些不影响功能的代码变动）
5. refactor：重构
6. test：增加测试
7. chore：构建过程或者辅助工具变动

### 添加

```bash
git push
```

### 拉取

```bash
git pull
```

### 分支

```
1. 查看分支 git branch
2. 创建分支 git branch <name>
3. 切换分支 git checkout <name>
4. 上传分支 git push --set-upstream origin <name>
5. 创建&切换 git checkout -b <name>
6. 合并分支 git merge <name>
7. 删除分支 git branch -d <name>
8. 删除远程分支 git branch -D <name>
```

[拉取远程分支到本地](https://blog.csdn.net/carfge/article/details/79691360)

```
1. 初始化 git init
2. 同远程建立连接 git remote add origin <url>
3. 远程分支拉取到本地 git fetch origin <name> （name 为远程仓库分支名）
4. 本地创建分支 test 并切换到该分支 git checkout -b test origin/dev
   1. test 为本地新建分支 dev 为远程分支名
5. 将某分支拉取到本地 git pull origin <name>
6. 本地上传到远程 git push origin <name>
```

### tag 标签

```
1. 创建新标签 git tag <name>
2. 指定标签信息 git tag
3. Tag 添加附属信息 git tag -a V1.2 -m '附加信息'
4. 提交 tag 到远程 git push origin <name>
```

### 报错处理：

```bash
  dist/vue-ssr-client-manifest.json: needs merge
  dist/vue-ssr-server-bundle.json: needs merge
  error: you need to resolve your current index first

  #报错处理
  git reset --merge
```
