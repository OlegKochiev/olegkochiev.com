import React from 'react';
import Head from 'next/head';
import type {AppProps} from 'next/app';
import '../styles/globals.scss';
import GlobalContextProvider from '../context/GlobalContext';

export default function App({Component, pageProps}: AppProps) {
  return (
    <GlobalContextProvider>
      <React.Fragment>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
          <title>Олег Кочиев | Сайт Портфолио</title>
          <link rel="icon" href="/favicon.svg" />
        </Head>
        <Component {...pageProps} />
      </React.Fragment>
    </GlobalContextProvider>
  );
}
