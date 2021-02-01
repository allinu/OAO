---
author: Liona Maskros
created_date: 2021-01-29 20:32:59
modified_date: 2021-01-29 20:35:01
title: Mac 搭建开发环境
tags: Mac
    笔记
	技巧
description: 在 Mac 下搭建一个合格的开发环境
categories: 笔记
publish: true
show_comments: true
secret_code:
---

# Mac 搭建开发环境

> 本文主要侧重于使用终端进行开发
>
> 主要的包括 Command Line Tools、Git、ssh、iTerm2、Kitty、zsh、tmux、Homebrew、Neovim 的配置

> 命令行输入密码是不显示的，是正常的

## Command Line Tools

这个是所有开发的基础，必须安装的部分。

安装也简单：直接打开启动器 -> 其他 -> 终端，输入 `git`会自动提示安装，只要点击确定就行了。

可能会遇到下载失败的情况，如果遇到这种情况，不要着急，打开 Apple 开发者官网，在里面下下载，然后再安装就可以了，这是[页面链接](https://developer.apple.com/download/more/)，选择一个合适的`Command Line Tools for Xcode`下载即可，一般最新的就行。

## Git

完成上面一步，git 就已经安装完毕了。

git 安装完毕后使用下面的命令设置 git 提交的用户名和邮箱

```shell
git config --global user.name "name"
git config --global user.email xxxx@xxx.xx
```

## SSH

完成上面一步，建议生成 ssh 秘钥，就可以使用 GitHub 上面的 ssh 方式 clone 项目了。

在终端里面输入以下命令，并摁下回车键

```shell
ssh-keygen
```

程序会询问一些问题，一直敲回车就可以了。

然后输入以下命令，获取生成的公钥

```shell
cat ~/.ssh/id_rsa.pub
```

然后复制返回的结果，打开 GitHub，在个人设置页面，添加 ssh 公钥，就算配置完成了。

## Iterm2

ITerm2 是一个类似 Mac 自带终端的一个程序，可以配置的选项更多，可以更好的提升用户体验。在[此页面](https://iterm2.com/) 下载安装即可。

## Kitty

Kitty 也是一个类似 iTerm2 的程序，适合进阶使用，有更好的显示效果，但是配置也比较繁琐一点，在[此页面](https://sw.kovidgoyal.net/kitty/) 下载

## zsh 的配置

zsh 是一个 shell 名称，区别于 bash，使用的人数还是很多的，Mac 自带 zsh，但是不是很好看，所以这里主要说两个方面：[主题配置](https://github.com/ohmyzsh/ohmyzsh/wiki/Themes)、[插件配置](https://github.com/ohmyzsh/ohmyzsh/wiki/Plugins)

我主要介绍 [OhMyZsh](https://ohmyz.sh/) 的方式，等你能力变强，或者现在就是一个进阶玩家，请自行配置

执行下面的步骤进行安装 [OhMyZsh](https://ohmyz.sh/)

```shell
 sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

然后输入登录密码，就可以了。

## Tmux 的配置

Tmux 是一个终端复用工具，能在同一个终端下面完成很多操作，可以实现分割屏幕。

这里我介绍的是[这个](https://github.com/gpakosz/.tmux)，类似于 OhMyZsh，是个现成的配置文件。安装步骤如下

```shell
cd
git clone https://github.com/gpakosz/.tmux.git
ln -s -f .tmux/.tmux.conf
cp .tmux/.tmux.conf.local .
```

## Homebrew

Homebrew 是一个 Mac 下相当好用的包管理器，可以方便的安装开发环境

安装步骤如下

```shell
export HOMEBREW_CORE_GIT_REMOTE="https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-core.git"
export HOMEBREW_BOTTLE_DOMAIN="https://mirrors.tuna.tsinghua.edu.cn/homebrew-bottles"

git clone --depth=1 https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/install.git brew-install
/bin/bash -c "$(sed 's|^HOMEBREW_BREW_GIT_REMOTE=.*$|HOMEBREW_BREW_GIT_REMOTE="https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/brew.git"|g' brew-install/install.sh)"
rm -rf brew-install

echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.tuna.tsinghua.edu.cn/homebrew-bottles' >> ~/.bash_profile
source ~/.bash_profile

echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.tuna.tsinghua.edu.cn/homebrew-bottles' >> ~/.zprofile
source ~/.zprofile
```

### Nodejs

```shell
brew install node@14
```

### python3

```shell
brew install python@3.9
```

## Neovim

终端下的编辑器之神，小白慎用

```shell
brew install neovim
```

neovim 我使用的是[这个](https://github.com/hardcoreplayers/ThinkVim)

安装步骤如下

```shell
brew install jarvim
jarvim -g
```

然后根据自己的需要选择就可以了，程序会自动下载，感谢 Thinkvim 的作者。
