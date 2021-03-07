import React from 'react';
import MainLayout from "../../containers/MainLayout";
import {countriesStore, searchStore, weatherStore} from "../../store/store";
import classes from './Home.module.scss'
import {observer} from "mobx-react-lite";

const Home = () => {

  const chooseCountry = (name) => {
    console.log(name)
    // weatherStore.getWeather()
  }

  return (
    <MainLayout search={true} >
      <section className={classes.home}>
        <h1 className={classes.title}>Countries</h1>


        <article className={classes.list}>
          {
            countriesStore.countries.map((item) => {
              let isShow = item.country.toLowerCase().includes(searchStore.value.toLowerCase()) ||
                           item.capital.toLowerCase().includes(searchStore.value.toLowerCase())
              if (!isShow) return;

              return (
                <button className={classes.card} onClick={() => chooseCountry(item.country)} key={item.country}>
                  <img src={item.countryImage} alt={`${item.country} ${item.capital}`} className={classes.list__cover}/>
                  <h2>{item.country}</h2>
                  <p>{item.capital}</p>
                </button>
              )
            })
          }

        </article>
      </section>

      {/*<section>Заглавная картинка</section>*/}
      {/*<section>Мне повезёт</section>*/}
      {/*<section>Карта мира</section>*/}
      {/*<section>WoW</section>*/}
    </MainLayout>
  );
};

export default observer(Home);