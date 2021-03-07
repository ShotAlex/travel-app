import React from 'react';
import classes from "./Present.module.scss";
import {countryStore} from "../../../store/store";

const Present = () => {
  return (
    <section className={classes.present}>
      <h1 className={classes.title}>{countryStore.country}</h1>
      <img src={countryStore.countryImage} alt="country" className={classes.picture} />
    </section>
  );
};

export default Present;