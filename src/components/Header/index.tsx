import React from 'react';
import styled from 'styled-components';
import {homePageDatas} from '../../data/home';
import {MyName} from '../../pages';
import NavLinks from '../Home/NavLinks';
import ThemeSwitcher from '../ThemeSwitcher';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px 15px;
`;

const Header = () => {
  return (
    <Container>
      <MyName>{homePageDatas.myName}</MyName>
      <NavLinks />
      <ThemeSwitcher />
    </Container>
  );
};

export default Header;
