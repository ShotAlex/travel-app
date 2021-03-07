import { makeAutoObservable } from 'mobx';
import belImg from "../assets/images/home-cards/belarus.jpg";



class Countries {
  constructor() {
    makeAutoObservable(this);
  }

  countries = [
    {
      country: 'Belarus',
      capital: 'Minsk',
      countryImage: belImg,
    },
    {
      country: 'Russia',
      capital: 'Moscow',
      countryImage: belImg,
    },
  ]


}

export default Countries;
