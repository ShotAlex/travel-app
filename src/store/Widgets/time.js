import { makeAutoObservable } from 'mobx';
import {langStore} from "../store";

// const DAY_MS = 8.64e7;
// const HOUR_MS = 3.6e6;
// const MIN_MS = 6e4;
// const SEC_MS = 1e3;
// const INITIAL_STATE = {
//   days: '--',
//   hours: '--',
//   minutes: '--',
//   seconds: '--'
// }

class Time {
  constructor() {
    makeAutoObservable(this);
  }

  localTime = ''
  localDate = ''
  country = ''

  getLocalTime() {
    const options = {
      timeZone: 'Europe/London',
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    };

    const time = new Date().toLocaleDateString(langStore.currentLang, options)
    this.setDate(time)
  }

  setDate(time) {
    console.log(time)
    console.log('TIME:', time)
    // console.log('TIME:', time.match(/..:..:..\w/gi))
  }

  setLocalTime(time) {
    this.localTime = time
  }

  setLocalDate(date) {
    this.localDate = date
  }

  setCountry(c) {
    this.country = c
  }
}

export default Time;
