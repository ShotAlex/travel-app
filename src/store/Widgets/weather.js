import { makeAutoObservable } from 'mobx';


class Weather {
  constructor() {
    makeAutoObservable(this);
  }

  weather = 0
  metric = 'C'

}

export default Weather;
