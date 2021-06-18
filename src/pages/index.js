import React from "react"
import clsx from "clsx"
import Layout from "@theme/Layout"
import Link from "@docusaurus/Link"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import useBaseUrl from "@docusaurus/useBaseUrl"

import styles from "./styles.module.scss"

const cards = [
  {
    title: "Developer",
    imageUrl: "img/roles/developer.png",
    description: (
      <>
        Create a subgraph or use existing subgraphs in a dApp.
      </>
    ),
    link: '/'
  },
  {
    title: "Indexer",
    imageUrl: "img/roles/indexer.png",
    description: (
      <>
        Operate a node to index data and serve queries.
      </>
    ),
    link: '/'
  },
  {
    title: "Curator",
    imageUrl: "img/roles/curator.png",
    description: (
      <>
        Organize data by signaling on subgraphs.
      </>
    ),
  },
  {
    title: "Delegator",
    imageUrl: "img/roles/delegator.png",
    description: (
      <>
        Secure the network by delegating GRT to Indexers.
      </>
    ),
    link: '/'
  },
]

function Card({ imageUrl, title, description, link }) {
  const imgUrl = useBaseUrl(imageUrl)
  return (
    <div className={styles.card}>
      {imgUrl &&
        <img className={styles.cardImg} src={imgUrl} alt={title} />
      }
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <Link to={useBaseUrl(link)} className="read-more">
        <p className={styles.small}>Read more</p>
        <img src="/img/arrow-white.svg" />
      </Link>
    </div >
  )
}

export default function Home() {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main className="landing">
        <div className="center">
          <h1 className="big-title">Master The Graph</h1>
          <p className="description">
            Browse the latest developer documentation including
            API reference, articles, and sample code.
          </p>
          <Link className="read-more" to={useBaseUrl("docs/")}>
            <p>Read more About The Graph</p>
            <img src="/img/arrow-white.svg" />
          </Link>
        </div>
        {cards?.length > 0 && (
          <section className={styles.cards}>
            {cards.map((props, idx) => (
              <Card key={idx} {...props} />
            ))}
          </section>
        )}
      </main>
    </Layout>
  )
}
