import styled from 'styled-components';
import {Theme} from '../../types';

export const Bar = styled.span<{theme: Theme}>`
  display: block;
  position: absolute;
  height: 2px;
  background-color: ${({theme}) => theme.color};
  transition: transform 0.5s, width 0.5s;
`;

export const StyledBurgerButton = styled.button`
  width: 40px;
  height: 40px;
  position: relative;

  span:nth-of-type(1) {
    width: 50%;
    top: 0;
    left: 0;
  }
  span:nth-of-type(2) {
    width: 100%;
    top: 50%;
    left: 0;
    transform: translate(0, -50%);
  }
  span:nth-of-type(3) {
    width: 50%;
    bottom: 0;
    right: 0;
  }

  &.active {
    span:nth-of-type(1) {
      transform: translate(50%, 50%) rotate(-45deg);
    }
    span:nth-of-type(2) {
      transform: rotate(45deg);
    }
    span:nth-of-type(3) {
      transform: translate(-80%, -80%) rotate(-45deg);
    }
  }
`;
