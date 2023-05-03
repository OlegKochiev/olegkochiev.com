import {useContext, useState} from 'react';
import {GlobalContext} from '../../context/GlobalContext';
import {Bar, StyledBarContainer, StyledBurgerButton} from './BurgerButton.styled';

type Props = {
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
};

export default function BurgerButton({isMenuOpen, setIsMenuOpen}: Props) {
  const {theme} = useContext(GlobalContext);

  const handleButtonClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <StyledBurgerButton onClick={handleButtonClick}>
      <StyledBarContainer className={isMenuOpen ? 'active' : ''}>
        <Bar theme={theme} />
        <Bar theme={theme} />
        <Bar theme={theme} />
      </StyledBarContainer>
    </StyledBurgerButton>
  );
}
