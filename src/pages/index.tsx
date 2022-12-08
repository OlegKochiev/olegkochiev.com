import {PATHS, THEME} from '../constants';
import Head from 'next/head';

import Image from 'next/image';
import styles from '../styles/style.module.scss';
import ThemeSwitcher from '../components/ThemeSwitcher';
import Link from 'next/link';
import SocialIcons from '../components/SocialIcons';
import styled, {ThemeContext} from 'styled-components';
import {useContext, useEffect, useState} from 'react';
import {Theme} from '../types';

const Main = styled.main`
  background-color: ${({theme}) => theme.theme.backgroundColor};
  color: ${({theme}) => theme.theme.color};
`;

export default function Home() {
  const [theme, setTheme] = useState<Theme>(THEME.LIGHT);

  useEffect(() => {
    console.log(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <Main>
        <div className={styles.themeSwitcherContainer}>
          <ThemeSwitcher />
        </div>
        <div className={styles.container}>
          <div>
            <img className={styles.logo} src="/favicon.ico" />
          </div>
          <div className={styles.vertical_line}></div>
          <div className={styles.info}>
            <h1 className={styles.my_name}>Олег Кочиев</h1>
            <nav className={styles.navigation}>
              <Link href={PATHS.HOME()}>Главная</Link>
              <Link href={PATHS.ABOUT_ME()}>Обо мне</Link>
              <Link href={PATHS.PORTFOLIO()}>Портфолио</Link>
            </nav>
          </div>
        </div>
        <SocialIcons />
      </Main>
    </ThemeContext.Provider>
  );
}
