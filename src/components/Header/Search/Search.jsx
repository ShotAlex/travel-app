import React from 'react';
import classes from './Search.module.scss'
import searchImg from '../../../assets/images/search.svg'
import {searchStore} from "../../../store/store";
import {observer} from "mobx-react-lite";

const Search = () => {
  const inputRef = React.useRef()

  const clearSearch = () => {
    searchStore.changeValue('')
  }

  const setValue = e => {
    searchStore.changeValue(e.target.value)
  }

  const search = (e, click = false) => {
    if(e.key === 'Enter'){
      e.target.blur();
    }
  }

  return (
    <section className={classes.search}>
      <input
        type="text" value={searchStore.value}
        className={classes.search__input}
        onChange={e => setValue(e)}
        placeholder={'Search...'} id="search"
        ref={inputRef}
        onKeyPress={(e) => search(e)}
        autoFocus
      />
      <label htmlFor="search" className={classes.search__icon}>
        <span className={classes.clear} onClick={() => clearSearch()}>x</span>
      </label>
      <img src={searchImg} alt="search country" onClick={() => search('')}/>
    </section>
  );
};

export default observer(Search);