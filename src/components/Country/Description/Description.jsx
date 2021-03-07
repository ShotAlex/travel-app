import React from 'react';
import classes from "./Description.module.scss";
import {countryStore} from "../../../store/store";

const Description = () => {
  return (
    <section className={classes.description}>
      <h2 className={classes.h2}>Description</h2>
      <article className={classes.content}>
        <h3 className={classes.country}>{countryStore.country}</h3>
        <h4 className={classes.capital}>{countryStore.capital}</h4>
        <div className={classes.descr}>{countryStore.description}</div>
      </article>
    </section>
  );
};

export default Description;