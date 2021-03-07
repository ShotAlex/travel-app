import React from 'react';
import classes from './LanguageMenu.module.scss'
import enImg from '../../../assets/images/lang-icons/united-states.svg'
import ruImg from '../../../assets/images/lang-icons/russia.svg'
import esImg from '../../../assets/images/lang-icons/spain.svg'
import {langStore} from "../../../store/store";

const LanguageMenu = () => {
  const [lang, setLang] = React.useState('EN')
  const [visibleMenu, setVisibleMenu] = React.useState(false)

  const changeLang = lang => {
    setVisibleMenu(() => false)
    setLang(lang)
  }

  const showLangMenu = () => {
    setVisibleMenu(visible => !visible)
  }

  return (
    <section className={classes.lang}>
      <button className={classes.lang__btn} onClick={() => showLangMenu()}>
        {langStore.currentLang.lang}
        <img src={langStore.currentLang.flag} alt={langStore.currentLang.lang} />
      </button>

      {
        visibleMenu && (
          <div className={classes.container}>
            {
              langStore.langs.map((item) => {
                if(item.lang === langStore.currentLang.lang) return;
                return (
                    <button
                    className={classes.lang__btn}
                    onClick={() => changeLang(item.lang)}
                  >
                    {item.lang} <img src={item.flag} alt={item.lang}/>
                  </button>
                )
              })
            }

          </div>
        )
      }

    </section>
  );
};

export default LanguageMenu;