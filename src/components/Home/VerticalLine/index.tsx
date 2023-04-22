import React, {useContext} from 'react';
import styled from 'styled-components';
import {GlobalContext} from '../../../context/GlobalContext';

const Line = styled.div`
  width: 1px;
  height: 100px;
  background-color: ${({theme}) => theme.lineColor};
  transition: background-color 0.25s;
  @media (max-width: 770px) {
    height: 30px;
  }
`;

const VerticalLine = () => {
  const {theme} = useContext(GlobalContext);
  return <Line theme={theme}></Line>;
};

export default VerticalLine;
