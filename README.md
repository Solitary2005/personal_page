# 个人科研主页

基于 [Jekyll](https://jekyllrb.com/) 的轻量个人学术主页，部署于 GitHub Pages。布局参考 zhangzhengtu.github.io（左侧固定侧边栏 + 顶部导航 + 论文卡片），配色与中英切换方案参考 DavidLXu.github.io。

## 本地预览

**方式一：Docker（推荐，无需安装 Ruby）**

```bash
docker compose up
# 打开 http://localhost:4000
```

**方式二：本机 Ruby**

```bash
bundle install
bundle exec jekyll serve
```

## 部署到 GitHub Pages

1. 在 GitHub 新建仓库 `你的用户名.github.io`
2. 推送本目录内容到该仓库的默认分支（main）
3. 打开仓库 Settings → Pages，确认 Source 为 main 分支根目录
4. 等几分钟构建完成后访问 `https://你的用户名.github.io`
5. 修改 `_config.yml` 中的 `url` 为你的站点地址

## 修改个人信息

| 内容 | 文件 |
| --- | --- |
| 姓名、邮箱、GitHub、社交图标、头像 | `_config.yml` |
| 开头引用（中/英） | `index.html` 顶部的 `quote_en` / `quote_zh` |
| About 简介（中/英） | `index.html` 的 about 区块 |
| 简历 PDF | `assets/cv/CV.pdf`（替换占位文件） |
| CV 页教育/经历条目 | `_data/cv.yml` |
| 头像 | `assets/img/avatar.svg`（可换成自己的照片） |

## 修改论文和项目

论文卡片数据在 `_data/publications.yml`，项目在 `_data/projects.yml`。每个条目：

```yaml
- title: "论文标题"
  authors: "Author One, **你的名字**, Author Two"   # **加粗** 高亮自己
  venue: "Conference Name, 2026"
  image: /assets/paper_img/xxx.png                  # 缩略图放 assets/paper_img/
  summary: "可选：一句话简介（项目建议填写）"
  links:
    - { name: Paper, url: "https://arxiv.org/abs/xxx" }
    - { name: Project, url: "https://项目主页" }
    - { name: Code, url: "https://github.com/用户名/仓库", repo: "用户名/仓库" }  # repo 会自动显示 star 数
```

缩略图推荐 800×450 左右的 PNG/JPG，替换掉占位 SVG 即可。

## 写博客

1. 在 `_posts/` 新建文件，命名 `YYYY-MM-DD-标题.md`（文件名日期决定发布日期）
2. front matter 模板：

```yaml
---
title: "文章标题"
date: 2026-10-06
tags: [Paper Notes]     # 三选一：Paper Notes / Personal Thoughts / Book Notes
excerpt: "一句话摘要，显示在博客列表。"
---
```

3. 正文用 Markdown。中英双语文章用 `<div data-lang="en" markdown="1">...</div>` 和 `<div data-lang="zh" markdown="1">...</div>` 分别包裹（参考 `_posts/` 里的示例文章）；只写一种语言则直接写即可。

### 博客分类

默认三类（对应 DavidLXu 的分类体系）：**论文笔记**（Paper Notes）、**个人思考**（Personal Thoughts）、**读书笔记**（Book Notes）。新增分类：在 `_config.yml` 的 `blog_categories` 加一行，写文章时 tags 用对应的 `tag` 值即可。

## 目录结构

```
├── _config.yml        # 站点配置（个人信息、博客分类）
├── index.html         # 主页：引用 + About + 论文 + 项目
├── cv.html            # 简历页
├── blog.html          # 博客列表（分类筛选）
├── _data/             # 论文 / 项目 / 简历数据（改内容只需改这里）
├── _posts/            # 博客文章（Markdown）
├── _includes/         # 导航 / 侧边栏 / 卡片等组件
├── _layouts/          # 页面与文章布局
└── assets/            # CSS / JS / 图片 / 简历
```
