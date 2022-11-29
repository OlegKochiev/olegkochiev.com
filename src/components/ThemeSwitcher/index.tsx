import React from 'react';
import styles from '../../styles/ThemeSwitcher.module.css';
const ThemeSwitcher = () => {
  return (
    <div>
      <input className={styles.switch} type="checkbox" role="switch"></input>
    </div>
  );
};

export default ThemeSwitcher;
