import { makeAutoObservable } from 'mobx';
import belImg from "../assets/images/home-cards/belarus.jpg";


class Country {
  constructor() {
    makeAutoObservable(this);
  }

  country = 'Belarus'
  capital = 'Minsk'
  description = 'Here a little description of the country'
  countryImage = belImg
}

export default Country;
