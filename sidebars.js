// @ts-check
// Sidebar for the docs. Order here is the reading order shown in the menu.
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  guideSidebar: [
    'intro',
    'cheatsheet',
    {
      type: 'category',
      label: 'The Guide',
      collapsed: false,
      items: [
        'guide/getting-oriented',
        'guide/reading-the-advisory',
        'guide/acknowledging-the-report',
        'guide/triaging-the-report',
        'guide/preparing-the-fix',
        'guide/preparing-the-advisory',
        'guide/coordinating-publication',
        'guide/wrapping-up',
        'guide/building-for-the-long-term',
        'guide/getting-help'
      ]
    },
    'faq',
    'limitations',
    'resources'
  ]
}

module.exports = sidebars
