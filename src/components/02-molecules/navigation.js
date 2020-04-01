import React from 'react';
import { Link } from 'gatsby';

<<<<<<< HEAD:src/components/navigation.js
import headerStyles from './scss/navigation.module.scss';
import logo from '../images/logo.svg';

const Navigation = () => {
  return (
    <nav className={`cell small-12 ${headerStyles.link}`} >
      <img className={`large-10 ${headerStyles.logo}`} src={logo} alt="aw-logo" />
      <ul>
        <li><Link activeClassName={headerStyles.activePageLink} className={headerStyles.link} to="/">Home</Link></li>
=======
import headerStyles from './navigation.module.scss';

const Navigation = () => {
  return (
    <nav className={headerStyles.link}>
      <ul class="dropdown menu" data-dropdown-menu>
        <li><Link activeClassName={headerStyles.activePageLink} className={headerStyles.link } to="/">Home</Link></li>
>>>>>>> d2b545222cab609d5cadb50a03ec57f47bc824a9:src/components/02-molecules/navigation.js
        <li><Link activeClassName={headerStyles.activePageLink} className={headerStyles.link} to="/about">About</Link></li>
        <li><Link activeClassName={headerStyles.activePageLink} className={headerStyles.link} to="/blog">Blog</Link></li>
        <li><Link activeClassName={headerStyles.activePageLink} className={headerStyles.link} to="/contact">Contact</Link></li>
      </ul>
    </nav >
  )
}

export default Navigation;
