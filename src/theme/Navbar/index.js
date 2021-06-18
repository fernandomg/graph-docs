import React, { useCallback, useState, useEffect } from "react"
import useBaseUrl from "@docusaurus/useBaseUrl"
import Link from "@docusaurus/Link"


const DefaultNavItemPosition = "right" // If split links by left/right
// if position is unspecified, fallback to right (as v1)

const Navbar = () => {
  const [openMobileNav, setOpenMobileNav] = useState(false)

  return (
    <nav>
      <div className="navigation">
        <div className="left">
          <a href="https://thegraph.com"><img src="/img/graph-logo.svg" /></a>
          <a href="https://thegraph.com">The Graph</a>
          <a href="https://thegraph.com/docs">Docs</a>
          <a href="https://thegraph.com/blog">Blog</a>
          <a href="https://thegraph.com/security">Security</a>
          <a href="https://thegraph.com/jobs">Jobs</a>
        </div>
        <div className="right">
          <div className="button">
            <Link>
              Subgraph Studio
            <img src="/img/arrow-right.svg" />
            </Link>
          </div>
          <div className="button">
            <Link>
              Graph Explorer
            <img src="/img/arrow-right.svg" />
            </Link>
          </div>
        </div>
      </div>
      <div className="show-mobile">
        <div className="left">
          <a href="https://thegraph.com">
            <img src="/img/graph-logo.svg" />
          </a>
          <a href="https://thegraph.com">The Graph</a>
        </div>
        <img
          onClick={() => setOpenMobileNav(true)}
          className="menu-icon"
          src="/img/menu.svg"
        />
      </div>
      {openMobileNav &&
        <div className="mobile-nav">
          Placeholder
      </div>}
    </nav>
  )
}

export default Navbar
