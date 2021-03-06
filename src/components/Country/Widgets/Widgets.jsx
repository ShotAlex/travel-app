import React from 'react';
import classes from './Widgets.module.scss'

const Widgets = () => {
  return (
    <aside>
      <section className={classes.widget}>
        +18 C
      </section>
      информер погоды в столице страны
      курс местной валюты по отношению к доллару, евро, рублю
      дата и время в столице страны
    </aside>
  );
};

export default Widgets;