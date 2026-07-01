// @ts-check
// Docusaurus configuration (prototype). Docs: https://docusaurus.io/docs/api/docusaurus-config
const { themes: prismThemes } = require('prism-react-renderer')

const githubUrl = 'https://github.com/alpha-omega-security/maintainers-security-advisory-guide'

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "The Maintainer's Guide to GitHub Security Advisories",
  tagline: "So you got your first GHSA. Don't panic.",

  // Deployment (GitHub Pages project site). Update these if the repo moves (e.g. to the OSSF org).
  url: 'https://alpha-omega-security.github.io',
  baseUrl: '/maintainers-security-advisory-guide/',
  organizationName: 'alpha-omega-security',
  projectName: 'maintainers-security-advisory-guide',

  onBrokenLinks: 'warn',

  i18n: { defaultLocale: 'en', locales: ['en'] },

  // Enables mermaid code blocks (used by the lifecycle diagram).
  markdown: { mermaid: true, hooks: { onBrokenMarkdownLinks: 'warn' } },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // serve docs at the site root
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: githubUrl + '/edit/main/docs/'
        },
        blog: false,
        theme: { customCss: require.resolve('./src/css/custom.css') }
      })
    ]
  ],

  themeConfig: {
    navbar: {
      title: "Maintainer's Guide to GHSAs",
      items: [
        { to: '/cheatsheet', label: 'Cheatsheet', position: 'right' },
        { href: githubUrl, label: 'GitHub', position: 'right' }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Guide',
          items: [
            { label: 'Start here', to: '/' },
            { label: 'Cheatsheet', to: '/cheatsheet' },
            { label: 'FAQ', to: '/faq' },
            { label: 'Resources', to: '/resources' }
          ]
        },
        {
          title: 'Project',
          items: [
            { label: 'Contributing', href: githubUrl + '/blob/main/CONTRIBUTING.md' },
            { label: 'Code of Conduct', href: githubUrl + '/blob/main/CODE_OF_CONDUCT.md' },
            { label: 'License (CC BY 4.0)', href: githubUrl + '/blob/main/LICENSE' },
            { label: 'GitHub', href: githubUrl }
          ]
        }
      ],
      copyright: 'Licensed CC BY 4.0.'
    },
    prism: { theme: prismThemes.github, darkTheme: prismThemes.dracula }
  }
}

module.exports = config
