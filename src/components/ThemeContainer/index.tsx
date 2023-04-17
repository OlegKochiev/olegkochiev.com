import React, {useContext} from 'react';
import {GlobalContext} from '../../context/ThemeContext';
import styled from 'styled-components';

export const Container = styled.main`
  min-height: 100vh;
  background-color: ${({theme}) => theme.backgroundColor};
  color: ${({theme}) => theme.color};
  transition: color 0.25s, background-color 0.25s;
`;

export default function ThemeContainer({children}: {children: JSX.Element}) {
  const {theme} = useContext(GlobalContext);
  return <Container theme={theme}>{children}</Container>;
}
