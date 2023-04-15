import '../styles/globals.scss';
import type {AppProps} from 'next/app';
import styled, {ThemeContext} from 'styled-components';
import {THEME} from '../constants';
import React, {useState} from 'react';
import Head from 'next/head';
import {Theme} from '../types';
import useLocalStorage from '../hooks/useLocalStorage';

const Main = styled.main`
  min-height: 100vh;
  background-color: ${({theme}) => theme.theme.backgroundColor};
  color: ${({theme}) => theme.theme.color};
  transition: color 0.25s, background-color 0.25s;
`;

export default function App({Component, pageProps}: AppProps) {
  const [theme, setTheme] = useLocalStorage<Theme>('theme', THEME.LIGHT);

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <React.Fragment>
        <Head>
          <title>Олег Кочиев | Сайт Портфолио</title>
        </Head>
        <Main>
          <Component {...pageProps} />
        </Main>
      </React.Fragment>
    </ThemeContext.Provider>
  );
}
