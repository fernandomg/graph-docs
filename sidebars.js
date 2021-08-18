module.exports = {
  docs: [
    {
      type: 'category',
      label: 'About The Graph',
      items: [
        'about/introduction',
        'about/network',
      ],
    },
    {
      type: 'category',
      label: 'Developer',
      items: [
        'developer/quick-start',
        'developer/define-subgraph-hosted',
        'developer/create-subgraph-hosted',
        'developer/deploy-subgraph-studio',
        'developer/publish-subgraph',
        'developer/query-the-graph',
        'developer/querying-from-your-app',
        'developer/assemblyscript-api',
        'developer/graphql-api',
        'developer/deprecating-a-subgraph'
      ],
    },
    {
      type: 'doc',
      id: 'indexing',
      label: 'Indexer'
    },
    {
      type: 'doc',
      id: 'delegating',
      label: 'Delegator'
    },
    {
      type: 'doc',
      id: 'curating',
      label: 'Curator'
    },
    {
      type: 'category',
      label: 'Subgraph Studio',
      items: [
        'studio/subgraph-studio',
        'studio/multisig',
        'studio/billing',
      ]
    },
    {
      type: 'doc',
      id: 'explorer',
      label: 'The Graph Explorer'
    },
    {
      type: 'category',
      label: 'Legacy Explorer',
      items: [
        'legacyexplorer/whatislegacyexplorer',
        'legacyexplorer/deploy-subgraph-hosted'
      ]
    },
  ],
}
