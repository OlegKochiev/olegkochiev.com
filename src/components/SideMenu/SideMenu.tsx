import React from 'react';
import {StyledBackBlur, StyledMenuContainer, StyledMenuContent} from './StyledSideMenu';
import NavLinks from '../Home/NavMenu/NavMenu';
import {createGlobalStyle} from 'styled-components';

type Props = {
  isMenuOpen: boolean;
};

export default function SideMenu({isMenuOpen}: Props) {
  const GlobalStye = createGlobalStyle`
    body {
      overflow: ${isMenuOpen ? 'hidden' : 'scroll'};
    }
  `;
  return (
    <StyledMenuContainer isOpen={isMenuOpen}>
      <GlobalStye />
      <StyledBackBlur isOpen={isMenuOpen}>
        <StyledMenuContent isOpen={isMenuOpen}>
          <NavLinks isHorizontal={false} />
        </StyledMenuContent>
      </StyledBackBlur>
    </StyledMenuContainer>
  );
}
