import { makeAutoObservable } from 'mobx';


class Store {
  constructor() {
    makeAutoObservable(this);
    this.score = +localStorage.getItem('score') || 0;
  }

  score = 0;
  lang = 'EN';




}

export default new Store();