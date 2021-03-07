import { makeAutoObservable } from 'mobx';
import {countriesStore, countryStore, langStore} from "../store";


const KEY_API = 'cacc13c2899b6095815285b1dee10aaf';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

class Weather {
  constructor() {
    makeAutoObservable(this);
  }

  weatherIcon = ''
  metric = 'C'
  temperature = 0
  humidity = 0
  description = ''
  speed = 0
  city = ''

  async getWeather() {
    const url = `${BASE_URL}?q=${countryStore.capital}&lang=${langStore.currentLang.lang}&appid=${KEY_API}&units=metric`;
    const res = await fetch(url);
    const data = await res.json()

    this.setWeather(data)
  }

  setWeather(data) {
    this.temperature = `${parseInt(data.main.temp)} ${this.metric}`
    this.humidity = `Humidity: ${data.main.humidity}%`
    this.description = data.weather[0].description
    this.speed = `Speed: ${Math.round(data.wind.speed)}m/s`
    this.city = data.name;

    // weatherIcon.className = 'weather-icon owf';
    // weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  }
}

export default Weather;
