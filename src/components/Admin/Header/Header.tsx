import React, {useState} from 'react';
import {Container} from './StyledHeader';
import useMatchMedia from '../../../hooks/useMatchMedia';
import BurgerButton from '../../BurgerButton/BurgerButton';

interface Props {
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
}

export default function Header({isMenuOpen, setIsMenuOpen}: Props) {
  const {isMobile} = useMatchMedia();

  return (
    <Container>
      header
      {isMobile && <BurgerButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />}
    </Container>
  );
}
