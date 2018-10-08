import React from 'react';

import burgerLogo from '../../assets/images/132 burger-logo.png';
import classes from './Logo.css';

const logo = (props) => (
  <div className={classes.Logo} style={{height: props.height}}>
    <img src={burgerLogo} alt="Logo Burger"></img>
  </div>
);

export default logo;