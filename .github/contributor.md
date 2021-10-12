# Try UI 贡献指南

首先感谢你使用Try UI。 Try UI 的成长离不开大家的支持，如果想为 Try UI 贡献代码或者提意见，请阅读以下内容。

## Issue 规范

- issue 仅用于提交 Bug 或 Feature 以及设计相关的内容，其它内容可能会被直接关闭。
- 在提交 issue 之前，请搜索相关内容是否已被提出。

## Pull Request 规范

- 请先 fork 一份到自己的项目下，不要直接在仓库下建分支。
- commit 信息要以`[组件名]: 描述信息` 的形式填写，例如 `Button: fix xxx bug`。
- 提交 PR 前请 rebase，确保 commit 记录的整洁。
- 确保 PR 是提交到 `dev` 分支，而不是 `master` 分支。
- 如果是修复 bug，请在 PR 中给出描述信息。

## 开发环境搭建

```shell
git clone git@github.com:iyanghong/try-ui.git
npm run dev

# open http://localhost:6660
```

## 组件开发规范

### 目录结构

- build 项目构建信息
- examples 项目文档示例存放目录
    - components vue形式的文档存放目录
    - docs markdown文档存放目录（文件名对应组件）
    - layout 文档页面布局
    - router 文档路由
    - styles 文档个性化样式（文件名对应组件）
        - index.scss 文档样式导入入口文件，（如果是新增需要在里面添加@import "xx.scss"）
    - App.vue 文档项目视图入口文件
    - index.js 文档项目入口
    - index.tpl 文档构建模板
    - nav.config.json 左侧菜单栏目录
    - routes.config.js 路由自动导入文件（导入为nav.config.json文件）
- src 组件工作目录
    - components 组件目录
    - theme 组件主题样式目录
    - utils 工具类目录
    - index.js 入口文件
