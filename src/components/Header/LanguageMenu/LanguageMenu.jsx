import React from 'react';
import classes from './LanguageMenu.module.scss'
import enImg from '../../../assets/images/lang-icons/united-states.svg'
import ruImg from '../../../assets/images/lang-icons/russia.svg'
import esImg from '../../../assets/images/lang-icons/spain.svg'

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
        {lang}
      </button>

      {
        visibleMenu && (
          <div className={classes.container}>
            <button className={classes.lang__btn} onClick={() => changeLang('EN')}>
              EN <img src={enImg} alt="english"/>
            </button>
            <button className={classes.lang__btn} onClick={() => changeLang('RU')}>
              RU <img src={ruImg} alt="russian"/>
            </button>
            <button className={classes.lang__btn} onClick={() => changeLang('ES')}>
              ES <img src={esImg} alt="spain"/>
            </button>
          </div>
        )
      }

    </section>
  );
};

export default LanguageMenu;