import Link from 'next/link';
import React, {useContext, useState} from 'react';
import styled from 'styled-components';
import {PATHS} from '../../constants';
import {homePageDatas} from '../../data/home';
import NavLinks from '../Home/NavLinks';
import ThemeSwitcher from '../ThemeSwitcher';
import {GlobalContext} from '../../context/GlobalContext';
import BurgerButton from '../BurgerButton/BurgerButton';

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

const BurgerButton2 = styled.button`
  display: block;
  mask-image: url('/burger_button.svg');
  mask-repeat: no-repeat;
  mask-size: contain;
  width: 50px;
  height: 50px;
  background-color: ${({theme}) => theme.color};
  transition: background-color 0.25s;
`;

const Logo = styled.div`
  padding-bottom: 5px;
  font-size: 22px;
  font-weight: bold;
  text-align: end;
`;

// const BurgerMenu = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 100vh;
//   background: #000;
//   z-index: 1;
// `;

const Header = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const {theme} = useContext(GlobalContext);

  const handleBurgerButtonClick = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };

  return (
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
        <BurgerButton />
        {/* <BurgerButton2 theme={theme} onClick={handleBurgerButtonClick} /> */}
      </MobileContainer>
      {/* {isBurgerMenuOpen && <BurgerMenu />} */}
    </HeaderContainer>
  );
};

export default Header;
