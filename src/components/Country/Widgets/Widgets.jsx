import React from 'react';
import classes from './Widgets.module.scss'
import {exchangeStore, weatherStore} from "../../../store/store";
import {observer} from "mobx-react-lite";

const Widgets = () => {
  React.useEffect(() => {
    // weatherStore.getWeather()
    // exchangeStore.getExchanges()
  }, [])

  return (
    <aside className={classes.widgets}>
      <h2 className={classes.h2}>Widgets</h2>

      {/*информер погоды в столице страны*/}
      <section className={classes.widget}>
        <h3>Weather</h3>
        <p>{weatherStore.city}</p>
        <p>{weatherStore.temperature}</p>
        <p>{weatherStore.description}</p>
        <p>{weatherStore.humidity}</p>
        <p>{weatherStore.speed}</p>
        <small></small>
      </section>

      {/*курс местной валюты по отношению к доллару, евро, рублю*/}
      <section className={classes.widget}>
        <h3>Exchange</h3>
        <p>1 USD = {exchangeStore.currencyUSD.toFixed(2)} {exchangeStore.base}</p>
        <p>1 EUR = {exchangeStore.currencyEUR.toFixed(2)} {exchangeStore.base}</p>
        <p>1 RUB = {exchangeStore.currencyRUB.toFixed(2)} {exchangeStore.base}</p>
        <p>1 CNY = {exchangeStore.currencyCNY.toFixed(2)} {exchangeStore.base}</p>
        <p></p>

      </section>

      {/*дата и время в столице страны*/}
      <section className={classes.widget}>
        <h3>Local Time</h3>
        <p>2 : 25</p>
      </section>
    </aside>
  );
};

export default observer(Widgets);