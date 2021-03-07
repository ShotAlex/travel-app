import { makeAutoObservable } from 'mobx';


class Search {
  constructor() {
    makeAutoObservable(this);
  }

  value = ''

  changeValue(value) {
    console.log(this.value)
    this.value = value
  }

}

export default Search;
