import React from 'react';
import Head from 'next/head';
import type {AppProps} from 'next/app';
import '../styles/globals.scss';
import GlobalContextProvider from '../context/ThemeContext';

export default function App({Component, pageProps}: AppProps) {
  return (
    <GlobalContextProvider>
      <React.Fragment>
        <Head>
          <title>Олег Кочиев | Сайт Портфолио</title>
        </Head>
        <Component {...pageProps} />
      </React.Fragment>
    </GlobalContextProvider>
  );
}
