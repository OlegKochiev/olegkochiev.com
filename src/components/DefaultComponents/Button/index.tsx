import React from 'react';
import styled from 'styled-components';

const DefaultButton = styled.button`
  width: fit-content;
  padding: 10px;
  border: 1px solid #078080;
  transition: background-color 0.2s, color 0.2s;
  &:hover {
    background-color: #078080;
    color: white;
  }
`;

export default DefaultButton;
