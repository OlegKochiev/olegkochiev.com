import React, {useContext, useState} from 'react';
import useMatchMedia from '../../hooks/useMatchMedia';
import Link from 'next/link';
import {GlobalContext} from '../../context/GlobalContext';
import {homePageDatas} from '../../data/home';
import NavLinks from '../Home/NavMenu/NavMenu';
import ThemeSwitcher from '../ThemeSwitcher';
import BurgerButton from '../BurgerButton/BurgerButton';
import SideMenu from '../SideMenu/SideMenu';
import {GridContainer, HeaderContainer, Logo, NavContainer} from './StyledHeader';
import {PAGES} from '../../constants';

const Header = () => {
  const {isMobile} = useMatchMedia();

  const {theme} = useContext(GlobalContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {isMobile && <SideMenu isMenuOpen={isMenuOpen} />}
      <HeaderContainer theme={theme}>
        <GridContainer>
          <Logo>
            <Link href={PAGES.HOME.PATH()}>{homePageDatas.myName}</Link>
          </Logo>
          <NavContainer>
            <NavLinks />
            <ThemeSwitcher />
          </NavContainer>
          {isMobile && <BurgerButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />}
        </GridContainer>
      </HeaderContainer>
    </>
  );
};

export default Header;
