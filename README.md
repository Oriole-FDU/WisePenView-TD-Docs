# 复旦大学教学设计文档

基于 Docusaurus 的复旦大学教学设计文档站，包含生成式人工智能教育教学应用指引与智慧课程教学设计研修引导手册。

## 本地开发

```bash
pnpm install
pnpm start
```

启动后访问本地预览地址，编辑 `docs` 目录下的 MDX 文件即可实时刷新。文档内容按 Word 原文整理，左侧栏对应原文主要章节。

## 常用命令

```bash
pnpm typecheck
pnpm build
```

## 内容结构

- `docs/guide`：复旦大学生成式人工智能教育教学应用指引及附件。
- `docs/handbook`：复旦大学智慧课程教学设计研修引导手册。
- `src/css/custom.css`：复旦蓝/红主题色、neutral 色阶和 WisePenView 风格排版。
- `sidebars.ts`：按原文章节组织的左右侧栏。

新增页面后同步更新 `sidebars.ts`，并运行 `pnpm typecheck` 和 `pnpm build`。
