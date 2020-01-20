import React from 'react';
import Navigation from '../02-molecules/navigation'
import Brand from '../01-atoms/brand';

import headerStyles from './header.module.scss'

const Header = () => {
  return (
    <div className={headerStyles.header}>
      <div class="top-bar">
        <div class="top-bar-left">
          <Brand />
        </div>
        <div class="top-bar-right">
          <Navigation />
        </div>
      </div>
    </div>
  )
}

export default Header;
