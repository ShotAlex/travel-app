import React from 'react';
import classes from './Header.module.scss';
import Search from "./Search/Search";
import LanguageMenu from "./LanguageMenu/LanguageMenu";
import Logotype from "./Logotype/Logotype";


const Header = ({search = false}) => {
  return (
    <header className={classes.header}>
      <Logotype />
      {
        search && <Search />
      }
      <LanguageMenu />
    </header>
  );
};

export default Header;