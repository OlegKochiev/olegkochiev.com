import React, {useContext} from 'react';
import styled, {ThemeContext} from 'styled-components';
import {GlobalContext} from '../../../context/ThemeContext';

const Line = styled.div`
  width: 1px;
  height: 80%;
  background-color: ${({theme}) => theme.lineColor};
  transition: background-color 0.25s;
`;

const VerticalLine = () => {
  const {theme} = useContext(GlobalContext);
  return <Line theme={theme}></Line>;
};

export default VerticalLine;
