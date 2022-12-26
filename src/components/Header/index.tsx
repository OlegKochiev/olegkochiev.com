import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import {PATHS} from '../../constants';
import {homePageDatas} from '../../data/home';
import {MyName} from '../../pages';
import NavLinks from '../Home/NavLinks';
import ThemeSwitcher from '../ThemeSwitcher';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Header = () => {
  return (
    <Container>
      <Link href={PATHS.HOME()}>
        <MyName>{homePageDatas.myName}</MyName>
      </Link>
      <NavLinks />
      <ThemeSwitcher />
    </Container>
  );
};

export default Header;
