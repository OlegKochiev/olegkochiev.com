import {useContext, useState} from 'react';
import {GlobalContext} from '../../context/GlobalContext';
import {Bar, StyledBarContainer, StyledBurgerButton} from './BurgerButton.styled';

export default function BurgerButton() {
  const [isActive, setActive] = useState(false);
  const {theme} = useContext(GlobalContext);

  const handleButtonClick = () => {
    setActive(!isActive);
  };

  return (
    <StyledBurgerButton onClick={handleButtonClick}>
      <StyledBarContainer className={isActive ? 'active' : ''}>
        <Bar theme={theme} />
        <Bar theme={theme} />
        <Bar theme={theme} />
      </StyledBarContainer>
    </StyledBurgerButton>
  );
}
