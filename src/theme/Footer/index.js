import React from 'react';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';

import styles from './styles.module.scss';

const socialIcons = Object.freeze([
  {
    icon: 'github-icon.svg',
    href: 'https://github.com/graphprotocol',
    social: 'github'
  },
  {
    icon: 'twitter-icon.svg',
    href: 'https://twitter.com/graphprotocol',
    social: 'twitter'
  },
  {
    icon: 'discord-icon.svg',
    href: 'https://discord.gg/vtvv7FP',
    social: 'discord'
  },
  {
    icon: 'telegram-icon.svg',
    href: 'http://t.me/graphprotocol',
    social: 'telegram'
  },
  {
    icon: 'reddit-icon.svg',
    href: 'https://reddit.com/r/thegraph',
    social: 'reddit'
  },
  {
    icon: 'email-icon.svg',
    href: 'mailto:info@thegraph.com',
    social: 'email'
  }
]);

const SocialIcon = ({ icon, href, social }) => {
  const iconImgUrl = useBaseUrl(`img/social/${icon}`);

  return (
    <a href={href} target="_blank" rel="noreferrer" className={styles['footer-social__icon']}>
      <img alt={social} src={iconImgUrl} width={16} height={16} />
    </a>
  );
};

export default function Footer() {
  const logo = useBaseUrl('img/graph-logo.svg');

  return (
    <footer>
      <div className={styles['footer-subscribe-container']}>
        <img alt="thegraph" src={logo} width={28} height={35} />
      </div>
      <div className={styles['footer-links']}>
        <a href="https://thegraph.com/">The Graph</a>
        <a href="https://thegraph.com/blog">Blog</a>
        <Link to={useBaseUrl('/')}>Docs</Link>
        <a href="https://thegraph.com/security/">Security</a>
        <a href="https://thegraph.com/jobs/">Jobs</a>
      </div>
      <div className={clsx(styles['footer-links'], styles['footer-links__bottom'])}>
        <a href="https://thegraph.foundation/">Graph Foundation</a>
        <a href="https://thegraph.com/legacy-explorer/">Legacy Explorer</a>
        <a href="https://forum.thegraph.com/">Forum</a>
        <a href="https://testnet.thegraph.com/">Testnet</a>
        <a href="https://thegraph.com/privacy/">Privacy Policy</a>
        <a href="https://thegraph.com/termsofuse/">Terms of Use</a>
      </div>
      <div className={styles['footer-social']}>
        {socialIcons.map((social) => (
          <SocialIcon key={social.social} {...social} />
        ))}
      </div>
    </footer>
  );
}
