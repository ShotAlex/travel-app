import React from 'react';
import classes from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <span className={classes.footer__text}>
        Creator:&nbsp;
      </span>
      <a
        href="https://github.com/ShotAlex"
        target="_blank"
        rel="noopener noreferrer"
        className={classes.footer__link}
      >
        ShotAlex
      </a>
      <span className={classes.footer__text} >
        &nbsp;2021 ♥
      </span>
    </footer>
  );
};

export default Footer;