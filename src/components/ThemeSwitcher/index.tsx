import React, {Fragment, useContext, useEffect, useState} from 'react';
import {ThemeContext} from 'styled-components';
import {THEME} from '../../constants';
import {Theme} from '../../types';
import styles from './style.module.scss';
const ThemeSwitcher = () => {
  const {theme, setTheme} = useContext(ThemeContext);

  const handleToggleTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    const selectedTheme = isChecked ? THEME.LIGHT : THEME.DARK;
    setTheme(selectedTheme);
  };

  return (
    <Fragment>
      <label className={styles.switch} htmlFor="theme-switcher">
        <input onChange={handleToggleTheme} type="checkbox" role="switch" id="theme-switcher"></input>
        <span className={styles.slider}></span>
      </label>
    </Fragment>
  );
};

export default ThemeSwitcher;
