import { makeAutoObservable } from 'mobx';
import minsk from "../assets/images/home-cards/belarus.jpg";
import kiev from "../assets/images/home-cards/kievjpg.jpg";
import moscow from "../assets/images/home-cards/moscow.jpg";
import washington from "../assets/images/home-cards/washington.jpg";
import london from "../assets/images/home-cards/london.jpeg";
import madrid from "../assets/images/home-cards/madrid.jpg";
import beijing from "../assets/images/home-cards/beijing.jpg";
import tokyo from "../assets/images/home-cards/tokyo.jpg";



class Countries {
  constructor() {
    makeAutoObservable(this);
  }

  countries = [
    {
      country: 'Belarus',
      capital: 'Minsk',
      countryImage: minsk,
    },
    {
      country: 'Ukraine',
      capital: 'Kiev',
      countryImage: kiev,
    },
    {
      country: 'Russia',
      capital: 'Moscow',
      countryImage: moscow,
    },
    {
      country: 'USA',
      capital: 'Washington',
      countryImage: washington,
    },
    {
      country: 'Great Britain',
      capital: 'London',
      countryImage: london,
    },
    {
      country: 'Spain',
      capital: 'Madrid',
      countryImage: madrid,
    },
    {
      country: 'China',
      capital: 'Beijing',
      countryImage: beijing,
    },
    {
      country: 'Japan',
      capital: 'Tokyo',
      countryImage: tokyo,
    },
  ]


}

export default Countries;
