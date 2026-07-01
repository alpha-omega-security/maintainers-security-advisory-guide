---
sidebar_position: 1
title: Prototype
slug: /
---

# Docusaurus scaffold (prototype)

This is the Docusaurus site scaffold for **The Maintainer's Guide to GitHub Security Advisories**.

No content has been migrated yet. The guide's source of truth is still the Markdown in `the_guide/`:

- `the_guide/GUIDE.md`
- `the_guide/CHEATSHEET.md`
- `the_guide/FAQ.md`
- `the_guide/LIMITATIONS.md`
- `the_guide/RESOURCES.md`

## Run it locally

```bash
npm install
npm start
```

## Migration checklist (later)

- Copy the Markdown from `the_guide/` into `docs/` (one file per page).
- Convert GitHub alerts (`> [!NOTE]`, `[!WARNING]`, etc.) to Docusaurus admonitions (`:::note`).
- Move `the_guide/images/` into `static/img/` and update image paths.
- Rewrite cross-doc links (`GUIDE.md#anchor`) to Docusaurus routes.
- Wire the pages into `sidebars.js`.
- Confirm the `mermaid` lifecycle diagram renders (theme is already enabled).
