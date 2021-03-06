import React from 'react';
import classes from './Search.module.scss'
import searchImg from '../../../assets/images/search.svg'

const Search = () => {
  const [value, setValue] = React.useState('')
  const changeValue = e => {
    setValue(e.target.value)
  }

  return (
    <section className={classes.search}>
      <input className={classes.search__input} type="text" value={value} onChange={e => changeValue(e)} placeholder={'Search...'} id="search" />
      <label htmlFor="search" className={classes.search__icon}>
        <img src={searchImg} alt="search country"/>
      </label>
    </section>
  );
};

export default Search;