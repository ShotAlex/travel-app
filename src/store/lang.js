import { makeAutoObservable } from 'mobx';

import enImg from '../assets/images/lang-icons/united-states.svg'
import ruImg from '../assets/images/lang-icons/russia.svg'
import esImg from '../assets/images/lang-icons/spain.svg'


class Lang {
  constructor() {
    makeAutoObservable(this);
  }

  currentLang = {
    lang: 'EN',
    flag: enImg
  }
  langs = [
    {
      lang: 'EN',
      flag: enImg,
    },
    {
      lang: 'RU',
      flag: ruImg,
    },
    {
      lang: 'ES',
      flag: esImg,
    },
  ]

  setCurrentLang(lang) {
    this.currentLang = this.langs.filter(item => item.lang === lang)[0]
  }
}

export default Lang;
