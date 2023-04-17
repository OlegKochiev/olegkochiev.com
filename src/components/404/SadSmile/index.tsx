import React, {useContext} from 'react';
import styled from 'styled-components';
import {GlobalContext} from '../../../context/GlobalContext';

const SadSmile = () => {
  const SadSmile = styled.span`
    display: inline-block;
    width: 28px;
    height: 28px;
    mask-image: url('/icons/sad_smile.svg');
    mask-position: center;
    mask-repeat: no-repeat;
    background-color: ${({theme}) => theme.color};
  `;
  const {theme} = useContext(GlobalContext);
  return <SadSmile theme={theme} />;
};

export default SadSmile;
