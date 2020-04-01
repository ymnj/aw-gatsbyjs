import React from 'react';
import Navigation from './navigation'

import headerStyles from './scss/header.module.scss'

const Header = () => {
  return (
    <div className={`grid-x grid-margin-x ${headerStyles.header}`}>
      <Navigation />
    </div>
  )
}

export default Header;
