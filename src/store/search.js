import { makeAutoObservable } from 'mobx';


class Search {
  constructor() {
    makeAutoObservable(this);
  }

  value = ''

  changeValue(value) {
    this.value = value
  }

}

export default Search;
