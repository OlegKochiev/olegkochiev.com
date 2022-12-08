import {useState} from 'react';
import {Theme} from '../types';
import {THEME} from '../constants';
import {Html, Head, Main, NextScript} from 'next/document';
import {ThemeContext} from 'styled-components';

export default function Document() {
  console.log(THEME);

  return (
    <Html lang="ru">
      <Head>
        <title>Олег Кочиев | Сайт Портфолио</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
