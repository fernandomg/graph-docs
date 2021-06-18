/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react"
import clsx from "clsx"
import Link from "@docusaurus/Link"
import { useThemeConfig } from "@docusaurus/theme-common"
import useBaseUrl from "@docusaurus/useBaseUrl"
import styles from "./styles.module.css"
import ThemedImage from "@theme/ThemedImage"

function FooterLink({ to, href, label, prependBaseUrlToHref, ...props }) {
  const toUrl = useBaseUrl(to)
  const normalizedHref = useBaseUrl(href, {
    forcePrependBaseUrl: true,
  })
  return (
    <Link
      className="footer__link-item"
      {...(href
        ? {
          href: prependBaseUrlToHref ? normalizedHref : href,
        }
        : {
          to: toUrl,
        })}
      {...props}
    >
      {label}
    </Link>
  )
}

function Footer() {
  const { footer } = useThemeConfig()

  if (!footer) {
    return null
  }

  return (
    <footer>
      <div className="footer-links">
        <Link to={useBaseUrl('/')}>The Graph</Link>
        <Link to={useBaseUrl('/')}>Blog</Link>
        <Link to={useBaseUrl('/')}>Docs</Link>
        <Link to={useBaseUrl('/')}>Security</Link>
        <Link to={useBaseUrl('/')}>Jobs</Link>
      </div>
      <div className="footer-links bottom">
        <Link to={useBaseUrl('/')}>Graph Foundation</Link>
        <Link to={useBaseUrl('/')}>Legacy Explorer</Link>
        <Link to={useBaseUrl('/')}>Forum</Link>
        <Link to={useBaseUrl('/')}>Testnet</Link>
        <Link to={useBaseUrl('/')}>Privacy Policy</Link>
        <Link to={useBaseUrl('/')}>Terms of Use</Link>
      </div>
    </footer>
  )
}

export default Footer
