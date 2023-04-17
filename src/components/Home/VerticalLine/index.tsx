import React, {useContext} from 'react';
import styled from 'styled-components';
import {GlobalContext} from '../../../context/GlobalContext';

const Line = styled.div`
  width: 1px;
  height: 120px;
  background-color: ${({theme}) => theme.lineColor};
  transition: background-color 0.25s;
`;

const VerticalLine = () => {
  const {theme} = useContext(GlobalContext);
  return <Line theme={theme}></Line>;
};

export default VerticalLine;
