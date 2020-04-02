import React from 'react';

// import Footer from './footer';
import Header from './header';

import layoutStyles from './scss/layout.module.scss';

const Layout = (props) => {

  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
        <div class="grid-container">
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default Layout;
