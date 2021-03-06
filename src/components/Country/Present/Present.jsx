import React from 'react';
import classes from "./Present.module.scss";
import belImg from "../../../assets/images/home-cards/belarus.jpg";

const Present = () => {
  return (
    <section className={classes.present}>
      <h1 className={classes.title}>Belarus</h1>
      <img src={belImg} alt="country" className={classes.picture} />
    </section>
  );
};

export default Present;