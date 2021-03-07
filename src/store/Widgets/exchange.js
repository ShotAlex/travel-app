import { makeAutoObservable } from 'mobx';
import {exchangeBaseUrl} from "../../utils/variables";


class Exchange {
  constructor() {
    makeAutoObservable(this);
  }

  base = 'USD'
  currencyUSD = 0
  currencyEUR = 0
  currencyRUB = 0
  currencyCNY = 0

  async getExchanges() {
    const url = exchangeBaseUrl + this.base
    const res = await fetch(url)
    const data = await res.json()

    this.setExchanges(data)
  }

  setExchanges(data) {
    this.currencyUSD = 1 / data.conversion_rates.USD
    this.currencyEUR = 1 / data.conversion_rates.EUR
    this.currencyRUB = 1 / data.conversion_rates.RUB
    this.currencyCNY = 1 / data.conversion_rates.CNY

  }
}

export default Exchange;
