import React from 'react';
import {StyledBackBlur, StyledMenuContainer, StyledMenuContent} from './StyledSideMenu';
import NavLinks from '../Home/NavMenu/NavMenu';
import {createGlobalStyle} from 'styled-components';

type Props = {
  isMenuOpen: boolean;
};

export default function SideMenu({isMenuOpen}: Props) {
  const GlobalStyle = createGlobalStyle`
    body {
      overflow: ${isMenuOpen ? 'hidden' : 'scroll'};
    }
  `;
  return (
    <StyledMenuContainer isOpen={isMenuOpen}>
      <GlobalStyle />
      <StyledBackBlur isOpen={isMenuOpen}>
        <StyledMenuContent isOpen={isMenuOpen}>
          <NavLinks isHorizontal={false} />
        </StyledMenuContent>
      </StyledBackBlur>
    </StyledMenuContainer>
  );
}
