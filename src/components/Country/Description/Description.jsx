import React from 'react';
import classes from "../Country.module.scss";

const Description = () => {
  return (
    <section className={classes.description}>
      название страны,
      название её столицы
      краткую информацию о стране
    </section>
  );
};

export default Description;