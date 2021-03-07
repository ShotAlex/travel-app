import { makeAutoObservable } from 'mobx';


class Time {
  constructor() {
    makeAutoObservable(this);
  }

  localTime = ''
  Country = ''
}

export default Time;
