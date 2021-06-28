/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Graph Docs',
  tagline: 'Master The Graph',
  url: 'https://thegraph.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'The Graph',
  projectName: 'The Graph Documentation',
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true
    },
    navbar: {},
    footer: {}
  },
  plugins: [require.resolve('docusaurus-plugin-sass')],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/graphprotocol/graph-docs'
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/graphprotocol/graph-docs'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss')
        }
      }
    ]
  ]
};
