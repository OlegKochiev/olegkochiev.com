import {useContext} from 'react';
import {GlobalContext} from '../../context/GlobalContext';
import {Bar, BarContainer, StyledBurgerButton} from './StyledBurgerButton';

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
      <BarContainer className={isMenuOpen ? 'active' : ''}>
        <Bar theme={theme} />
        <Bar theme={theme} />
        <Bar theme={theme} />
      </BarContainer>
    </StyledBurgerButton>
  );
}
