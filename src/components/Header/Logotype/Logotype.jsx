import React from 'react';
import logoImg from '../../../assets/images/logo.jpg'
import classes from './Logotype.module.scss'
import {NavLink} from "react-router-dom";

const Logotype = () => (
  <NavLink to="/" className={classes.logo}>
    <img src={logoImg} alt="Logotype Go travel" className={classes.logo__img}/>
    Go Travel
  </NavLink>
);

export default Logotype;