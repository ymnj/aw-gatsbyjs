import React from 'react';
import { Link } from 'gatsby';

import headerStyles from './scss/navigation.module.scss';
import logo from '../images/logo.svg';

const Navigation = () => {
  return (
    <nav className={`cell small-12 ${headerStyles.link}`} >
      <img className={`large-10 ${headerStyles.logo}`} src={logo} alt="aw-logo" />
      <ul>
        <li><Link activeClassName={headerStyles.activePageLink} className={headerStyles.link} to="/">Home</Link></li>
        <li><Link activeClassName={headerStyles.activePageLink} className={headerStyles.link} to="/about">About</Link></li>
        <li><Link activeClassName={headerStyles.activePageLink} className={headerStyles.link} to="/blog">Blog</Link></li>
        <li><Link activeClassName={headerStyles.activePageLink} className={headerStyles.link} to="/contact">Contact</Link></li>
      </ul>
    </nav >
  )
}

export default Navigation;
