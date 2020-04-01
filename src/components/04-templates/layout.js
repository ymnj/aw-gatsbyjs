import React from 'react';

<<<<<<< HEAD:src/components/layout.js
// import Footer from './footer';
import Header from './header';
=======
import layoutStyles from './layout.module.scss';
import Footer from '../03-organisms/footer';
import Header from '../03-organisms/header';
>>>>>>> d2b545222cab609d5cadb50a03ec57f47bc824a9:src/components/04-templates/layout.js


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
