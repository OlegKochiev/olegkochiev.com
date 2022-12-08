import {useContext, useEffect, useState} from 'react';
import ThemeSwitcher from '../components/ThemeSwitcher';
import SocialIcons from '../components/Home/SocialIcons';
import {PATHS, THEME} from '../constants';
import {Theme} from '../types';

import Head from 'next/head';
import Link from 'next/link';
import styled, {ThemeContext} from 'styled-components';
import styles from '../styles/style.module.scss';
import NavLinks from '../components/Home/NavLinks';

const Main = styled.main`
  background-color: ${({theme}) => theme.theme.backgroundColor};
  color: ${({theme}) => theme.theme.color};
`;

export default function Home() {
  const [theme, setTheme] = useState<Theme>(THEME.LIGHT);

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <Main>
        <ThemeSwitcher />
        <div className={styles.container}>
          <img className={styles.logo} src="/favicon.ico" />
          <div className={styles.vertical_line}></div>
          <div className={styles.info}>
            <h1 className={styles.my_name}>Олег Кочиев</h1>
            <NavLinks />
          </div>
        </div>
        <SocialIcons />
      </Main>
    </ThemeContext.Provider>
  );
}
