import { makeAutoObservable } from 'mobx';
import Exchange from "./Widgets/exchange";
import Time from "./Widgets/time";
import Weather from "./Widgets/weather";
import Country from "./country";
import Countries from "./countries";
import Lang from "./lang";


class Store {
  constructor() {
    makeAutoObservable(this);
    this.score = +localStorage.getItem('score') || 0;
  }
  score = 0;
  lang = 'EN';
}
const store = new Store();




const exchangeStore = new Exchange()
const timeStore = new Time()
const weatherStore = new Weather()
const countryStore = new Country()
const countriesStore = new Countries()
const langStore = new Lang()

export {
  store,
  exchangeStore,
  timeStore,
  weatherStore,
  countryStore,
  countriesStore,
  langStore,

};