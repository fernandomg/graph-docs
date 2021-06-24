import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './styles.module.scss';

const cards = Object.freeze([
  {
    title: 'Developer',
    imageUrl: 'img/roles/developer.png',
    description: <>Create a subgraph or use existing subgraphs in a dApp.</>,
    link: '/'
  },
  {
    title: 'Indexer',
    imageUrl: 'img/roles/indexer.png',
    description: <>Operate a node to index data and serve queries.</>,
    link: '/'
  },
  {
    title: 'Curator',
    imageUrl: 'img/roles/curator.png',
    description: <>Organize data by signaling on subgraphs.</>
  },
  {
    title: 'Delegator',
    imageUrl: 'img/roles/delegator.png',
    description: <>Secure the network by delegating GRT to Indexers.</>,
    link: '/'
  }
]);
const products = Object.freeze([
  {
    title: 'Subgraph Studio',
    imageUrl: 'img/products/Docs-Studio-Graphic.svg',
    description: 'Create Subgraphs and API keys',
    link: '/',
    alignment: 'LEFT'
  },
  {
    title: 'Graph Explorer',
    imageUrl: 'img/products/Docs-Explorer-Graphic.svg',
    description: 'Explorer Subgraphs and interact with the protocol',
    link: '/',
    alignment: 'RIGHT'
  }
]);

const Card = ({ imageUrl, title, description, link }) => {
  const to = useBaseUrl(link);
  const imgUrl = useBaseUrl(imageUrl);

  return (
    <Link className={styles['network-roles__card']}>
      {imgUrl && <img className={styles['network-roles__card-img']} src={imgUrl} alt={title} />}
      <h3 className={styles['network-roles__title']}>{title}</h3>
      <p className={styles['network-roles__description']}>{description}</p>
      <span to={to} className={styles['landing__read-more']}>
        <p className={styles['network-roles__small']}>Learn more</p>
        <img src="/img/arrow-white.svg" />
      </span>
    </Link>
  );
};

const ProductCardInfo = ({ title, description, to, alignment }) => {
  const cardAlignmentClass = alignment === 'LEFT' ? styles['product-info--left'] : styles['product-info--right'];

  return (
    <div className={clsx(styles['product-info'], cardAlignmentClass)}>
      <div className={styles['product-info__content']}>
        <span className={styles['product-info__tag']}>Product</span>
        <h4 className={styles['product-info__title']}>{title}</h4>
        <span className={styles['product-info__description']}>{description}</span>
        <Link to={to} className={styles['product-info__link-btn']}>
          <span className={styles['product-info__link-btn__text']}>Learn more</span>
          <img src="/img/arrow-white.svg" />
        </Link>
      </div>
    </div>
  );
};

const ProductCard = ({ title, description, imageUrl, link, alignment }) => {
  const to = useBaseUrl(link);
  const img = useBaseUrl(imageUrl);
  const cardAlignmentClass = alignment === 'LEFT' ? styles['product-card--left'] : styles['product-card--right'];
  const imgAlignmentClass = alignment === 'LEFT' ? styles['product-img--left'] : styles['product-img--right'];

  const ProductImg = () => (
    <Link to={to}>
      <img alt={title} src={img} className={clsx(styles['product-img'], imgAlignmentClass)} />
    </Link>
  );
  const ProductInfo = () => <ProductCardInfo title={title} description={description} to={to} alignment={alignment} />;

  return (
    <div className={clsx(styles['product-card'], cardAlignmentClass)}>
      {alignment === 'LEFT' ? (
        <>
          <ProductInfo />
          <ProductImg />
        </>
      ) : (
        <>
          <ProductImg />
          <ProductInfo />
        </>
      )}
    </div>
  );
};

export default function Home() {
  return (
    <Layout
      title="Graph Docs"
      description="Browse the latest developer documentation including API reference, articles, and sample code"
    >
      <main className={styles.landing}>
        <div className={styles.center}>
          <h1 className={styles['landing__big-title']}>Master The Graph</h1>
          <p className={styles.landing__description}>
            Browse the latest developer documentation including API reference, articles, and sample code.
          </p>
          <Link className={styles['landing__read-more']} to={useBaseUrl('docs/')}>
            <p>Read more About The Graph</p>
            <img src="/img/arrow-white.svg" />
          </Link>
        </div>
        <section className={styles['network-roles']}>
          <div className={styles.header}>
            <h2 className={styles.header__title}>Network Roles</h2>
            <span className={styles.header__subtitle}>Learn about ways to participate in the network</span>
          </div>
          <div className={styles['network-roles__cards']}>
            {cards.map((props, idx) => (
              <Card key={idx} {...props} />
            ))}
          </div>
        </section>
        <section className={styles.products}>
          <div className={styles.header}>
            <h2 className={styles.header__title}>Products</h2>
            <span className={styles.header__subtitle}>
              Learn about our current products live on the decentralized network
            </span>
          </div>
          <div className={styles.products__cards}>
            {products.map((product, idx) => (
              <ProductCard {...product} key={product.title} alignment={idx % 2 ? 'RIGHT' : 'LEFT'} />
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
