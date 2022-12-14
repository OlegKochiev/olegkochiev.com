import React, {useState} from 'react';
import NavLinks from '../components/Home/NavLinks';
import ThemeSwitcher from '../components/ThemeSwitcher';
import SocialIcons from '../components/Home/SocialIcons';
import {PATHS, THEME} from '../constants';
import {Theme} from '../types';

import Head from 'next/head';
import styled, {ThemeContext} from 'styled-components';

import styles from '../styles/style.module.scss';
import VerticalLine from '../components/Home/VerticalLine';
import MyImage from '../components/Home/MyImage';
import {homePageDatas} from '../data/home';
import ThemeSwitcher2 from '../components/ThemeSwitcher';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
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

export const MyName = styled.h1`
  padding: 0 2px;
  font-size: 22px;
  font-weight: bold;
`;

export default function Home() {
  const [theme, setTheme] = useState<Theme>(THEME.LIGHT);
  return (
    <Container>
      <ThemeSwitcher />
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
  );
}
