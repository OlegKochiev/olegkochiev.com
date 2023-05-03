import React from 'react';
import {StyledBackBlur, StyledMenuContainer, StyledMenuContent} from './StyledSideMenu';
import NavLinks from '../Home/NavMenu/NavMenu';

type Props = {
  isMenuOpen: boolean;
};

export default function SideMenu({isMenuOpen}: Props) {
  return (
    <StyledMenuContainer isOpen={isMenuOpen}>
      <StyledBackBlur isOpen={isMenuOpen}>
        <StyledMenuContent isOpen={isMenuOpen}>
          <NavLinks isHorizontal={false} />
        </StyledMenuContent>
      </StyledBackBlur>
    </StyledMenuContainer>
  );
}
