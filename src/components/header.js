import React from 'react';
import Navigation from './navigation'

import headerStyles from './scss/header.module.scss'

const Header = () => {
  return (
    <div className={headerStyles.header}>
      <Navigation />
    </div>
  )
}

export default Header;
