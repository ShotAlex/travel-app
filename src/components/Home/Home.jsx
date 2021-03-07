import React from 'react';
import MainLayout from "../../containers/MainLayout";
import classes from './Home.module.scss'
import belImg from '../../assets/images/home-cards/belarus.jpg'
import {countriesStore} from "../../store/store";

const Home = () => {

  return (
    <MainLayout search={true} >
      <section>
        <h1>Countries</h1>


        <article className={classes.list}>
          {
            countriesStore.countries.map((item) => (
              <button className={classes.card} key={item.country}>
                <img src={item.countryImage} alt={`${item.country} ${item.capital}`} className={classes.list__cover}/>
                <h2>{item.country}</h2>
                <p>{item.capital}</p>
              </button>
            ))
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

export default Home;