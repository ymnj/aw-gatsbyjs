import React from 'react';
import { Link } from 'gatsby';

import headerStyles from './navigation.module.scss';

const Navigation = () => {
  return (
    <nav className={headerStyles.link}>
      <ul class="dropdown menu" data-dropdown-menu>
        <li><Link activeClassName={headerStyles.activePageLink} className={headerStyles.link } to="/">Home</Link></li>
        <li><Link activeClassName={headerStyles.activePageLink} className={headerStyles.link} to="/about">About</Link></li>
        <li><Link activeClassName={headerStyles.activePageLink} className={headerStyles.link} to="/blog">Blog</Link></li>
        <li><Link activeClassName={headerStyles.activePageLink} className={headerStyles.link} to="/contact">Contact</Link></li>
        <li><Link activeClassName={headerStyles.activePageLink} className={headerStyles.link} to="/tester">Link test</Link></li>
      </ul>
    </nav>
  )
}

export default Navigation;
