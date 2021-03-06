import React from 'react';
import MainLayout from "../../containers/MainLayout";
import classes from './Home.module.scss'
import belImg from '../../assets/images/home-cards/belarus.jpg'

const Home = () => {

  return (
    <MainLayout search={true} >
      <article>
        <h1>Countries</h1>
        <article className={classes.list}>

          <button className={classes.card}>
            <img src={belImg} alt="country" className={classes.list__cover}/>
            <h2>Belarus</h2>
            <p>Minsk</p>
          </button>

        </article>
      </article>

      {/*<section>Заглавная картинка</section>*/}
      {/*<section>Мне повезёт</section>*/}
      {/*<section>Карта мира</section>*/}
      {/*<section>WoW</section>*/}
    </MainLayout>
  );
};

export default Home;