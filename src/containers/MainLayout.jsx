import React from 'react';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import classes from './MainLayout.module.scss'

const MainLayout = ({search, children}) => {
  return (
    <>
      <Header search={search} />
      <main className={classes.main}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;