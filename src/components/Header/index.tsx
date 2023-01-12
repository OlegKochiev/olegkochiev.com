import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import {PATHS} from '../../constants';
import {homePageDatas} from '../../data/home';
import NavLinks from '../Home/NavLinks';
import ThemeSwitcher from '../ThemeSwitcher';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 170px 550px;
  grid-gap: 30px;
  align-content: center;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
`;

const Logo = styled.div`
  margin-left: auto;
  padding-bottom: 5px;
  font-size: 22px;
  font-weight: bold;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <GridContainer>
        <Logo>
          <Link href={PATHS.HOME()}>{homePageDatas.myName}</Link>
        </Logo>
        <NavContainer>
          <NavLinks />
          <ThemeSwitcher />
        </NavContainer>
      </GridContainer>
    </HeaderContainer>
  );
};

export default Header;
