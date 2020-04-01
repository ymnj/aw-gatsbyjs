import React from 'react';
import logo from "../../images/aw-logo.svg";

import logoStyles from './brand.module.scss'

const Brand = () => {
  return (
    <span>
      <img className={logoStyles.logo} src={logo} />
    </span>
  )
}

export default Brand;
