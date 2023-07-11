import styled from 'styled-components';
import {Theme} from '../../../types';

export const BaseTextArea = styled.textarea<{theme: Theme}>`
  width: 100%;
  min-height: 100px;
  max-height: 300px;
  padding: 7px;
  border-radius: 4px;
  border: solid 1px ${({theme}) => theme.lineColor};
  &:focus {
    outline: transparent;
    border-color: #078080;
  }
`;
