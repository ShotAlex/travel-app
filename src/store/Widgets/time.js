import { makeAutoObservable } from 'mobx';


class Time {
  constructor() {
    makeAutoObservable(this);
  }

  localTime = ''
  Country = ''

  getLocalTime() {
    var d = new Date();
    var n = d.getTimezoneOffset();
  }
}

export default Time;
