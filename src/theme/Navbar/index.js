import React, { memo, useState, useEffect, useRef } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './styles.module.scss';

const useOutsideRefAlert = (ref, handleOutsideClick) => {
  useEffect(() => {
    const onClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        handleOutsideClick();
      }
    };

    document.addEventListener('mousedown', onClick);

    return () => {
      document.removeEventListener('mousedown', onClick);
    };
  }, [ref]);
};

const MobileNav = memo(({ handleCloseMenu }) => {
  const closeMenuIcon = useBaseUrl('img/arrow-right.svg');

  return (
    <div className={styles['mobile-nav']}>
      <div className={styles['mobile-nav__container']}>
        <div className={styles['mobile-nav__header']}>
          <img
            alt="close nav menu"
            src={closeMenuIcon}
            className={styles['mobile-nav__header__back-icon']}
            width={10}
            height={10}
            onClick={() => handleCloseMenu()}
          />
          Docs
        </div>
        <div className={styles['mobile-nav__nav-list']}>
          <a href="https://thegraph.com">The Graph</a>
          <a href="https://thegraph.com/docs">Docs</a>
          <a href="https://thegraph.com/blog">Blog</a>
          <a href="https://thegraph.com/security">Security</a>
          <a href="https://thegraph.com/jobs">Jobs</a>
        </div>
        <div className={styles['mobile-nav__products-list']}>
          <a href="https://studio.thegraph.com" className={styles['product-btn']}>
            Subgraph Studio
            <img src={useBaseUrl("/img/arrow-right.svg")} />
          </a>
          <a href="https://explorer.thegraph.com" className={styles['product-btn']}>
            Graph Explorer
            <img src={useBaseUrl("/img/arrow-right.svg")} />
          </a>
        </div>
      </div>
    </div>
  );
});

const Navbar = () => {
  const [openMobileNav, setOpenMobileNav] = useState(false);
  const navRef = useRef(null);
  useOutsideRefAlert(navRef, () => setOpenMobileNav(false));

  useEffect(() => {
    if (openMobileNav) {
      const overlayEl = document.createElement('div');
      overlayEl.className = styles.overlay;
      overlayEl.id = 'mobile-overlay';
      document.querySelector('body').append(overlayEl);
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.getElementById('mobile-overlay')?.remove();
      document.documentElement.style.overflow = 'initial';
    }
  }, [openMobileNav]);

  return (
    <nav ref={navRef}>
      <div className={styles.navigation}>
        <div className={styles['navigation--left']}>
          <a href="https://thegraph.com">
            <img src={useBaseUrl("/img/graph-logo.svg")} />
          </a>
          <a href="https://thegraph.com">The Graph</a>
          <a href="https://thegraph.com/docs">Docs</a>
          <a href="https://thegraph.com/blog">Blog</a>
          <a href="https://thegraph.com/security">Security</a>
          <a href="https://thegraph.com/jobs">Jobs</a>
        </div>
        <div className={styles['navigation--right']}>
          <div className={styles['product-btn']}>
            <a href="https://studio.thegraph.com">
              Subgraph Studio
              <img src={useBaseUrl("/img/arrow-right.svg")} />
            </a>
          </div>
          <div className={styles['product-btn']}>
            <a href="https://explorer.thegraph.com">
              Graph Explorer
              <img src={useBaseUrl("/img/arrow-right.svg")} />
            </a>
          </div>
        </div>
      </div>
      <div className={styles['navigation__show-mobile']}>
        <div className={styles['navigation__show-mobile--left']}>
          <a href="https://thegraph.com">
            <img src={useBaseUrl("/img/graph-logo.svg")} />
          </a>
          <a href="https://thegraph.com">The Graph</a>
        </div>
        <img onClick={() => setOpenMobileNav(!openMobileNav)} className="menu-icon" src={useBaseUrl("/img/menu.svg")} />
      </div>
      {openMobileNav ? <MobileNav handleCloseMenu={() => setOpenMobileNav(false)} /> : null}
    </nav>
  );
};

export default Navbar;
