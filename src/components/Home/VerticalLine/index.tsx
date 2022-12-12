import React, {useContext} from 'react';
import styled, {ThemeContext} from 'styled-components';

const Line = styled.div`
  width: 1px;
  height: 80%;
  background-color: ${({theme}) => theme.theme.lineColor};
`;

const VerticalLine = () => {
  const {theme, setTheme} = useContext(ThemeContext);
  return <Line></Line>;
};

export default VerticalLine;
