import React from 'react';
import Head from 'next/head';
import {useRouter} from 'next/router';
import type {AppProps} from 'next/app';
import {PAGES} from '../constants';
import GlobalContextProvider from '../context/GlobalContext';

import '../styles/globals.scss';

export default function App({Component, pageProps}: AppProps) {
  const {pathname} = useRouter();
  const pageTitle = Object.values(PAGES).find((page) => page.PATH() === pathname)?.TITLE;
  const title = `Олег Кочиев | ${pageTitle}`;
  return (
    <GlobalContextProvider>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
        <title>{title}</title>
        <link type="image/x-icon" rel="icon" href="/favicon.ico" />
        <link type="image/png" sizes="16x16" rel="icon" href="/icons/favicon-16x16.png" />
        <link type="image/png" sizes="32x32" rel="icon" href="/icons/favicon-32x32.png" />
        <link type="image/png" sizes="192x192" rel="icon" href="/icons/android-chrome-192x192.png" />
        <link type="image/png" sizes="512x512" rel="icon" href="/icons/android-chrome-512x512.png" />
        <link rel="apple-touch-icon" sizes="57x57" href="/icons/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/icons/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/icons/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/icons/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/icons/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/icons/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/icons/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
      </Head>
      <Component {...pageProps} />
    </GlobalContextProvider>
  );
}
