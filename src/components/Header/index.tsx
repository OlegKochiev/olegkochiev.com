import Link from 'next/link';
import React, {useContext, useState} from 'react';
import styled from 'styled-components';
import {PATHS} from '../../constants';
import {homePageDatas} from '../../data/home';
import NavLinks from '../Home/NavMenu/NavMenu';
import ThemeSwitcher from '../ThemeSwitcher';
import {GlobalContext} from '../../context/GlobalContext';
import BurgerButton from '../BurgerButton/BurgerButton';
import SideMenu from '../SideMenu/SideMenu';

const HeaderContainer = styled.header`
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  margin-bottom: 20px;
  background-color: ${({theme}) => theme.backgroundColor};
  color: ${({theme}) => theme.color};
  transition: background-color 0.25s, color 0.25s;
  @media (max-width: 770px) {
    display: block;
  }
`;

const DesktopContainer = styled.div`
  display: grid;
  grid-template-columns: 170px 550px;
  grid-gap: 30px;
  align-content: center;
  @media (max-width: 770px) {
    display: none;
  }
`;

const MobileContainer = styled.div`
  display: none;
  @media (max-width: 770px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  @media (max-width: 770px) {
    display: none;
  }
`;

const Logo = styled.div`
  padding-bottom: 5px;
  font-size: 22px;
  font-weight: bold;
  text-align: end;
`;

const Header = () => {
  const {theme} = useContext(GlobalContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleBurgerButtonClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <SideMenu isMenuOpen={isMenuOpen} />
      <HeaderContainer theme={theme}>
        <DesktopContainer>
          <Logo>
            <Link href={PATHS.HOME()}>{homePageDatas.myName}</Link>
          </Logo>
          <NavContainer>
            <NavLinks />
            <ThemeSwitcher />
          </NavContainer>
        </DesktopContainer>
        <MobileContainer>
          <Logo>
            <Link href={PATHS.HOME()}>{homePageDatas.myName}</Link>
          </Logo>
          <BurgerButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </MobileContainer>
      </HeaderContainer>
    </>
  );
};

export default Header;
