import { makeAutoObservable } from 'mobx';
import Exchange from "./Widgets/exchange";
import Time from "./Widgets/time";
import Weather from "./Widgets/weather";
import Country from "./country";
import Countries from "./countries";
import Lang from "./lang";
import Search from "./search";


class Store {
  constructor() {
    makeAutoObservable(this);
  }
  store = 'EN';
}
const store = new Store();




const exchangeStore = new Exchange()
const timeStore = new Time()
const weatherStore = new Weather()
const countryStore = new Country()
const countriesStore = new Countries()
const langStore = new Lang()
const searchStore = new Search()

export {
  store,
  exchangeStore,
  timeStore,
  weatherStore,
  countryStore,
  countriesStore,
  langStore,
  searchStore,

};