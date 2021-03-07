import React from 'react';
import classes from './Widgets.module.scss'

const Widgets = () => {
  return (
    <aside className={classes.widgets}>
      <h2 className={classes.h2}>Widgets</h2>

      {/*информер погоды в столице страны*/}
      <section className={classes.widget}>
        <h3>Weather</h3>
        <p>+12 C</p>
      </section>

      {/*курс местной валюты по отношению к доллару, евро, рублю*/}
      <section className={classes.widget}>
        <h3>Exchange</h3>
        <p>1 USD = 2.6 BYN</p>
      </section>

      {/*дата и время в столице страны*/}
      <section className={classes.widget}>
        <h3>Local Time</h3>
        <p>2 : 25</p>
      </section>
    </aside>
  );
};

export default Widgets;