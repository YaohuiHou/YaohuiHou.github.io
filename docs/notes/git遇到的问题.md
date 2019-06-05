# git 配置 SSH

## 配置 SSH

如果您还没有 SSH 密钥，则必须生成新的 SSH 密钥。如果您不确定是否已有 SSH 密钥，请检查现有密钥。

```bash
# 查看.ssh中的文件
cd ~/.ssh
ls
# 查看其中是否有.pub 文件
config        id_rsa.pub    known_hosts   id_rsa        id_rsa_docker qyer_config
```

如果没有.pub 文件，或者打开.pub 查看是否为：

```
ssh-rsa AA2AB3NzaC1yc2EAAAADAQABAAACAQCwe9j6WVE2HsZ1lHgdiy4kphikQx+vqBe/H17Ow9v4t6oCVbiC9aPVRfB1HuaXBpp8Ff95FC3eRGJGJmK599GsoLUahsJ7AVL7u9bZNmvzIjt3KA5OnNMrGdTX0iYGTDZOfM/G5goIsZHUmooUSX/8Um0CaR6yf0ovQfluUadj8TSYrfdck2LJsfVARC3xTl3rNPeJJM3ZIsAB+vTVT0AFoZXfrf1dvFOe70yyRcWIqymGB0zZ2sQqNJ1wOm6MZzXlob+VUs6d+iy392X+F12rkmNxZvyHUNnAY/mrroCQGGZoQkAK3IRS12iCfvQZN60rW6wBTu6SADirIx10NqcCvPfBjcAalkGFSr7wExN39YY0Hovuw2Xi7OolI812jyB2TbPeK2FgBorHQ7s67Uloy5p2Auq/bqKU+8OOqhEmuZ+KF2bFdvHlWqCmFDP4L/X6aluZJIqNoD0Poe3AYp+r927UF3yMZpjdnjmGQY4uZjVDCrVQ8MMXLi2BK2JcVYNQUGo12TBEQWx75coqEDsl2WEEAt3fbN9IgbSbgQcYZqW7zLUOtut659xrsS6SlgD3wNtYb3z2QmVat01ITLTsvn1X920Ru3uQmKuq7PG2cUeeQfe2AXtRoGW+lokT7aqRTUYEcfj+WHqNeA/knGG56a6BHVe7cVGS9QB2aEqA7XwHgEEGtmQ== your_email@example.com
```

## 如果需要新的 SSH 密钥

- 打开终端
- 粘贴下面的文本，替换您的 GitHub 电子邮件地址。

```bash
$ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

这将使用提供的电子邮件作为标签创建一个新的 ssh 密钥。

```bash
> Generating public/private rsa key pair.
```

- 当系统提示您“输入要保存密钥的文件”时，按 Enter 键。这接受默认文件位置。

```bash
> Enter a file in which to save the key (/Users/you/.ssh/id_rsa): [Press enter]
```

- 在提示符下，键入安全密码。

```bash
> Enter passphrase (empty for no passphrase): [Type a passphrase]
> Enter same passphrase again: [Type passphrase again]
```

## 将 SSH 密钥添加到 ssh-agent

在将新的 SSH 密钥添加到 ssh-agent 以管理密钥之前，您应该检查现有的 SSH 密钥并生成新的 SSH 密钥。将 SSH 密钥添加到代理时，请使用默认的 macOS ssh-add 命令，而不是 macports，homebrew 或其他外部源安装的应用程序。

如果您不想在每次使用 SSH 密钥时重新输入密码，则可以将密钥添加到 SSH 代理，SSH 代理管理您的 SSH 密钥并记住您的密码。

- 在后台启动 ssh-agent。

```bash
~ eval "$(ssh-agent -s)"
> Agent pid 59566
```

- 如果您使用的是 macOS Sierra 10.12.2 或更高版本，则需要修改~/.ssh/config 文件以自动将密钥加载到 ssh-agent 中并在密钥链中存储密码。

```bash
Host *
  AddKeysToAgent yes
  UseKeychain yes
  IdentityFile ~/.ssh/id_rsa
```

[config 参数解释：](https://www.digitalocean.com/community/tutorials/how-to-configure-custom-connection-options-for-your-ssh-client)

```bash
Host #主机名
User #访问账户
Hostname  #ip或域名
Port  #端口
PreferredAuthentications #优先认证方式 这里填publickey
IdentityFile #本地私钥地址
UseKeychain #是否使用钥匙串
AddKeysToAgent #是否添加到钥匙串
```

- 将 SSH 私钥添加到 ssh-agent 并将密码存储在密钥链中。如果使用其他名称创建密钥，或者要添加具有不同名称的现有密钥，请将命令中的 id_rsa 替换为私钥文件的名称。

```bash
~ ssh-add -K ~/.ssh/id_rsa
```
