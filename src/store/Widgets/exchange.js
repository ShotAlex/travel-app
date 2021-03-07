import { makeAutoObservable } from 'mobx';


class Exchange {
  constructor() {
    makeAutoObservable(this);
  }


  currencyDollar = 'USD'
  currencyName = 'BYN'
  exchange = null
}

export default Exchange;
