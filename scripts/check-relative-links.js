#!/usr/bin/env node
// Fail if any doc uses a root-absolute internal link like [x](/guide/page).
//
// Those links only resolve on the deployed Docusaurus site and 404 when the
// markdown is read on github.com. Relative file paths with the .md extension
// (e.g. [x](./guide/page.md)) work in both places — Docusaurus rewrites them
// to site routes at build time: https://docusaurus.io/docs/markdown-features/links

const fs = require('fs')
const path = require('path')

const root = path.join(__dirname, '..')

function markdownFiles (dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) return markdownFiles(full)
    return entry.name.endsWith('.md') ? [full] : []
  })
}

const files = [path.join(root, 'README.md'), ...markdownFiles(path.join(root, 'docs'))]
const rootAbsoluteLink = /\]\(\//

let found = false
for (const file of files) {
  fs.readFileSync(file, 'utf8').split('\n').forEach((line, index) => {
    if (rootAbsoluteLink.test(line)) {
      found = true
      console.error(`${path.relative(root, file)}:${index + 1}:${line.trim()}`)
    }
  })
}

if (found) {
  console.error('\nRoot-absolute links found (listed above).')
  console.error('Use relative .md paths (e.g. ./guide/page.md) so links work on both GitHub and the site.')
  process.exit(1)
}
