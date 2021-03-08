import { makeAutoObservable } from 'mobx';
import {langStore} from "../store";

const timeZone = {
  'Minsk': {
    zone: 'Europe',
    capital: 'Minsk',
  },
  'Kiev': {
    zone: 'Europe',
    capital: 'Kiev',
  },
  'Moscow': {
    zone: 'Europe',
    capital: 'Moscow',
  },
  'Washington': {
    zone: 'America',
    capital: 'New_York',
  },
  'London': {
    zone: 'Europe',
    capital: 'London',
  },
  'Madrid': {
    zone: 'Europe',
    capital: 'Madrid',
  },
  'Beijing': {
    zone: 'Asia',
    capital: 'Hong_Kong',
  },
  'Tokyo': {
    zone: 'Asia',
    capital: 'Tokyo',
  },
}

class Time {
  constructor() {
    makeAutoObservable(this);
  }

  localTime = '--:--:--:'
  localDate = '00.00.0000'

  getLocalTime() {
    const options = {
      timeZone:  'America/New_York',
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    };

    const fullDate = new Date().toLocaleDateString(langStore.currentLang, options)
    this.setDate(fullDate)
  }

  setDate(fullDate) {
    const timeNow = fullDate.match(/..:..:..*/gi)
    const dateNow = fullDate.replace(/(,)*...:..:..*/gi, '')

    this.setLocalTime(timeNow)
    this.setLocalDate(dateNow)
  }

  setLocalTime(time) {
    this.localTime = time.toString()
  }

  setLocalDate(date) {
    this.localDate = date
  }
}

export default Time;
