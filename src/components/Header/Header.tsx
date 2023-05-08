import Link from 'next/link';
import React, {useContext, useState} from 'react';
import {GlobalContext} from '../../context/GlobalContext';
import {PATHS} from '../../constants';
import {homePageDatas} from '../../data/home';
import NavLinks from '../Home/NavMenu/NavMenu';
import ThemeSwitcher from '../ThemeSwitcher';
import BurgerButton from '../BurgerButton/BurgerButton';
import SideMenu from '../SideMenu/SideMenu';
import {GridContainer, HeaderContainer, Logo, NavContainer} from './StyledHeader';
import useMatchMedia from '../../hooks/useMatchMedia';

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
            <Link href={PATHS.HOME()}>{homePageDatas.myName}</Link>
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
