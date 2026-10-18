# 老胡胡说

基于 [astro-theme-sify](https://github.com/santisify/astro-theme-sify)。

- 站名：老胡胡说 · 作者：似水流年 Victor · 简介：老胡的胡言乱语
- 栏目：`/research` `/teaching` `/ai` `/essays`
- 标签：`/tags` · 关于：`/about` · 评论：关闭

## 本地预览（避免 node_modules 进坚果云）

```bash
rsync -a --exclude node_modules --exclude dist --exclude .git ~/My\ Sites/blog/ /tmp/blog-dev/
cd /tmp/blog-dev && npm install && npm run dev
```
