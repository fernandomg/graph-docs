/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Graph Docs',
  tagline: 'Master The Graph',
  url: 'https://thegraph.com',
  baseUrl: '/docs/',
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
  plugins: [
    require.resolve('docusaurus-plugin-sass'),
    // redirect old docs routes to new ones
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/developer/quick-start',
            from: '/quick-start'
          },
          {
            to: '/developer/define-subgraph-hosted',
            from: '/define-a-subgraph'
          },
          {
            to: '/developer/deploy-subgraph-hosted',
            from: '/deploy-a-subgraph'
          },
          {
            to: '/developer/query-the-graph',
            from: '/query-the-graph'
          },
          {
            to: '/developer/assemblyscript-api',
            from: '/assemblyscript-api'
          },
          {
            to: '/developer/graphql-api',
            from: '/graphql-api'
          },
          {
            to: '/indexing',
            from: '/network'
          },
        ],
      }
    ],
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // editUrl: 'https://github.com/graphprotocol/graph-docs/tree/main/',
          routeBasePath: '/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss')
        }
      }
    ]
  ]
}
