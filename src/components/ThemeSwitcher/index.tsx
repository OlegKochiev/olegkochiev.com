import React from 'react';
import styles from './style.module.scss';
const ThemeSwitcher = () => {
  return (
    <div>
      <label className={styles.switch} htmlFor="theme-switcher">
        <input type="checkbox" role="switch" id="theme-switcher"></input>
        <span className={styles.slider}></span>
      </label>
    </div>
  );
};

export default ThemeSwitcher;
