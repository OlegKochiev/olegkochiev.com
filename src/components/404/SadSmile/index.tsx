import React, {useContext} from 'react';
import styled, {ThemeContext} from 'styled-components';

const SadSmile = () => {
  const SadSmile = styled.span`
    display:inline-block;
    width: 28px;
    height: 28px;
    mask-image: url('/icons/sad_smile.svg');
    mask-position: center
    mask-repeat: no-repeat;
    background-color: ${({theme}) => theme.theme.color};
`;
  const {theme} = useContext(ThemeContext);
  return <SadSmile />;
};

export default SadSmile;
