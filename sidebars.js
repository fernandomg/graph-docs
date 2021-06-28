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
        'developer/deploy-subgraph-hosted',
        'developer/deploy-subgraph-studio',
        'developer/query-the-graph',
        'developer/decentralized-graph-explorer',
        'developer/assemblyscript-api',
        'developer/graphql-api',
        'developer/versioning',
        'developer/querying'
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
        'studio/billing'
      ]
    },
    {
      type: 'doc',
      id: 'explorer',
      label: 'The Graph Explorer'
    }
  ],
};
