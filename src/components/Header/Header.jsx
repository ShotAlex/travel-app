import React from 'react';
import classes from './Header.module.scss';
import Search from "./Search/Search";
import LanguageMenu from "./LanguageMenu/LanguageMenu";
import Logotype from "./Logotype/Logotype";


const Header = () => {
  return (
    <header className={classes.header}>
      <Logotype />
      <Search />
      <LanguageMenu />
    </header>
  );
};

export default Header;