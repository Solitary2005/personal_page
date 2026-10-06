---
title: "Hello World: My First Blog Post"
date: 2026-10-06
tags: [Personal Thoughts]
excerpt: "A welcome post that also explains how to write posts on this site."
---

<div data-lang="en" markdown="1">

Welcome to my blog! This is where I record my research journey — personal thoughts, paper notes, and reading notes.

## How to write a new post

1. Create a file `YYYY-MM-DD-your-title.md` in the `_posts/` folder.
2. Copy the front matter below (between the `---` lines) and edit it:
   - `title`: post title
   - `date`: publish date
   - `tags`: one of `Paper Notes` / `Personal Thoughts` / `Book Notes` (controls which category tab the post appears under)
   - `excerpt`: one-sentence summary shown on the blog list
3. Write the body in Markdown. Wrap Chinese/English paragraphs in `<div data-lang="...">` blocks to support the site language toggle (or just write in one language without the wrapper).

```yaml
---
title: "Your Title"
date: 2026-10-06
tags: [Paper Notes]
excerpt: "One-sentence summary."
---
```

</div>

<div data-lang="zh" markdown="1">

欢迎来到我的博客！这里记录我的科研日常——个人思考、论文笔记和读书笔记。

## 如何写一篇新文章

1. 在 `_posts/` 文件夹新建文件，命名格式 `YYYY-MM-DD-标题.md`。
2. 复制下方 front matter（两个 `---` 之间的部分）并修改：
   - `title`：文章标题
   - `date`：发布日期
   - `tags`：填 `Paper Notes` / `Personal Thoughts` / `Book Notes` 之一（决定文章出现在哪个分类标签下）
   - `excerpt`：一句话摘要，显示在博客列表中
3. 正文用 Markdown 书写。中英文段落分别用 `<div data-lang="...">` 包裹即可支持站点语言切换（也可以只用一种语言，不用包裹）。

```yaml
---
title: "你的标题"
date: 2026-10-06
tags: [Paper Notes]
excerpt: "一句话摘要。"
---
```

</div>
