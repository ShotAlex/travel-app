import React from 'react';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import classes from './MainLayout.module.scss'

const MainLayout = ({children}) => {
  return (
    <>
      <Header />
      <main className={classes.main}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;