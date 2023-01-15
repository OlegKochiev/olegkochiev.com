import React, {useContext} from 'react';
import styled, {ThemeContext} from 'styled-components';

const Line = styled.div`
  width: 1px;
  height: 80%;
  background-color: ${({theme}) => theme.theme.lineColor};
  transition: background-color 0.25s;
`;

const VerticalLine = () => {
  const {theme} = useContext(ThemeContext);
  return <Line></Line>;
};

export default VerticalLine;
