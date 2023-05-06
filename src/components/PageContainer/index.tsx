import React, {useContext} from 'react';
import styled from 'styled-components';
import {GlobalContext} from '../../context/GlobalContext';
import {Theme} from '../../types';

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

const Container = styled.main<{theme: Theme}>`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0 15px 20px;
  background-color: ${({theme}) => theme.backgroundColor};
  color: ${({theme}) => theme.color};
  transition: color 0.25s, background-color 0.25s;
`;

const PageContainer = ({children}: Props) => {
  const {theme} = useContext(GlobalContext);
  return <Container theme={theme}>{children}</Container>;
};

export default PageContainer;
