import React from 'react';
import MainLayout from "../../containers/MainLayout";
import classes from './Country.module.scss'
import Present from "./Present/Present";
import Description from "./Description/Description";
import Widgets from "./Widgets/Widgets";
import Gallery from "./Gallery/Gallery";
import Video from "./Video/Video";
import Map from "./Map/Map";


const Country = () => {
  return (
    <MainLayout>
      {/*<Present />*/}

      <article className={classes.description}>
        <Description />
        <Widgets />
      </article>


      {/*<Gallery />*/}
      {/*<Video />*/}
      {/*<Map />*/}
    </MainLayout>
  );
};

export default Country;