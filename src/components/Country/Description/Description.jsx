import React from 'react';
import classes from "./Description.module.scss";

const Description = () => {
  return (
    <section className={classes.description}>
      <h2 className={classes.h2}>Description</h2>
      <article className={classes.content}>
        <h3 className={classes.country}>название страны</h3>
        <h4 className={classes.capital}>название её столицы</h4>
        <div className={classes.descr}>
          краткую информацию о стране
          краткую информацию о стране
          краткую информацию о стране
        </div>
      </article>
    </section>
  );
};

export default Description;