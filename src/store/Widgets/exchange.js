import { makeAutoObservable } from 'mobx';

const baseUrl = 'http://data.fixer.io/api/latest?access_key=1a2be4cf15ba24c0b7bd4b925ca23c51&format=1'
const excUrl = 'https://v6.exchangerate-api.com/v6/8c1143ab664c78c3f0959f56/latest/'
class Exchange {
  constructor() {
    makeAutoObservable(this);
  }


  // base = 'USD'
  base = 'BYN'
  currencyUSD = 0
  currencyEUR = 0
  currencyRUB = 0
  currencyCNY = 0
  exchange = null

  async getExchanges() {
    // const url = 'https://api.exchangeratesapi.io/latest?base=USD'
    // const url = baseUrl + 'base=RYB&symbols=BYN,USD'
    const url = excUrl + this.base
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)

    // if(data.result === 'error') {
    //   this.base = 'USD'
    //   this.getExchanges()
    //   return
    // }

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
