import React, {useContext} from 'react';
import {GlobalContext} from '../../context/GlobalContext';
import styled, {createGlobalStyle} from 'styled-components';
import {Theme} from '../../types';

const GlobalStyle = createGlobalStyle<{theme: Theme}>`
body {
  min-height: 100vh;
  background-color: ${({theme}) => theme.backgroundColor};
  color: ${({theme}) => theme.color};
  transition: color 0.25s, background-color 0.25s;
}
`;

// export const Container = styled.main`
//   min-height: 100vh;
//   background-color: ${({theme}) => theme.backgroundColor};
//   color: ${({theme}) => theme.color};
//   transition: color 0.25s, background-color 0.25s;
// `;

export default function ThemeContainer({children}: {children: JSX.Element}) {
  const {theme} = useContext(GlobalContext);
  return (
    <>
      <GlobalStyle theme={theme} />
      {children}
    </>
  );
  // return <Container theme={theme}>{children}</Container>;
}
