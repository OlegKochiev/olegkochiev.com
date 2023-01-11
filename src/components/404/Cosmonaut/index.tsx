import React, {useContext} from 'react';
import styled, {ThemeContext} from 'styled-components';

const Cosmonaut = () => {
  const Cosmonaut = styled.div`
    width: 500px;
    height: 400px;
    background-color: ${({theme}) => theme.theme.color};
    mask-image: url('/404_cosmonaut.svg');
    mask-position: center;
    mask-repeat: no-repeat;
    mask-size: 100%;
  `;

  const {theme} = useContext(ThemeContext);
  return <Cosmonaut />;
};

export default Cosmonaut;
