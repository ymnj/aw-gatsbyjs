import React from 'react';

import layoutStyles from './layout.module.scss';
import Footer from '../03-organisms/footer';
import Header from '../03-organisms/header';


const Layout = (props) => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout;
