import {useContext, useEffect, useState} from 'react';
import NavLinks from '../components/Home/NavLinks';
import ThemeSwitcher from '../components/ThemeSwitcher';
import SocialIcons from '../components/Home/SocialIcons';
import {PATHS, THEME} from '../constants';
import {Theme} from '../types';

import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import {useRouter} from 'next/router';
import styled, {ThemeContext} from 'styled-components';

import styles from '../styles/style.module.scss';
import VerticalLine from '../components/Home/VerticalLine';
import MyImage from '../components/Home/MyImage';
import {homePageDatas} from '../data/home';

const Main = styled.main`
  height: 100vh;
  background-color: ${({theme}) => theme.theme.backgroundColor};
  color: ${({theme}) => theme.theme.color};
  transition: color 0.25s, background-color 0.25s;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 20px 15px;
`;
const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.5em;
  width: 100%;
  min-height: 120px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1em;
`;

const MyName = styled.h1`
  font-size: 22px;
  font-weight: bold;
`;

export default function Home() {
  const [theme, setTheme] = useState<Theme>(THEME.LIGHT);
  const router = useRouter();
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <Head>
        <title>Олег Кочиев | Сайт Портфолио</title>
      </Head>
      <Main>
        <Container>
          <ThemeSwitcher alignSelf={'flex-end'} />
          <Info>
            <MyImage />
            <VerticalLine />
            <UserInfo>
              <MyName>{homePageDatas.myName}</MyName>
              <NavLinks />
            </UserInfo>
          </Info>
          <SocialIcons />
        </Container>
      </Main>
    </ThemeContext.Provider>
  );
}
