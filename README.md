# 老胡胡说

基于 **Astro** 的个人静态博客骨架。四个栏目：

| 导航显示 | URL 路径 | 内容目录 |
|---------|----------|----------|
| 科研笔记 | `/research/` | `src/content/research/` |
| 教学札记 | `/teaching/` | `src/content/teaching/` |
| AI 时代 | `/ai/` | `src/content/ai/` |
| 闲情偶记 | `/essays/` | `src/content/essays/` |

## 本地开发

```bash
cd "~/My Sites/blog"
npm install
npm run dev
```

浏览器打开终端提示的地址（默认 `http://localhost:4321`）。

## 构建

```bash
npm run build
npm run preview   # 本地预览构建结果
```

静态产物在 `dist/`。

## 如何加文章

1. 在对应栏目目录新建 `.md` 文件，例如 `src/content/research/my-note.md`。
2. 文件头（frontmatter）示例：

```md
---
title: 标题
description: 一两句摘要（微信分享也会用到）
pubDate: 2026-10-18
# heroImage: /images/cover.jpg   # 可选，封面图
# draft: true                    # 可选，草稿不发布
---

正文用 Markdown 写……
```

3. 保存后 `npm run dev` 即可预览；文件名（不含扩展名）会成为 URL 的一部分。

站点标题、作者、栏目文案在 `src/consts.ts`；站点域名在 `astro.config.mjs` 的 `site` 字段（上 GitHub Pages 前再改）。

## 说明

- **不要评论**：当前未接入任何评论系统。
- **Open Graph**：布局里已预留 `og:title` / `og:description` / `og:image`，默认图为 `public/og-default.svg`，正式分享前建议换成 JPG/PNG 封面。
- `node_modules/` 已在 `.gitignore`；请勿提交或过度同步该目录。

## 坚果云同步说明

本目录在坚果云根目录 `My Sites/blog` 下同步。**不要**把 `node_modules`、`.astro`、`dist` 同步进坚果云（体积大且机器相关）。

```bash
cd "~/My Sites/blog"
npm install
npm run dev
```

## 坚果云路径

本仓库在：**坚果云根目录 / My Sites / blog**（两台 Mac 都会同步）。

- Mac mini：`~/Library/CloudStorage/坚果云-jhu@cqjtu.edu.cn/My Sites/blog`（也可用 `~/My Sites/blog`）
- MacBook Air：`~/Library/CloudStorage/坚果云-jhu@cqjtu.edu.cn/My Sites/blog`（用户名目录是 `Victor Hu`；也可用 `~/My Sites/blog`）

本地开发：

```bash
cd "~/My Sites/blog"
npm install
npm run dev
```
