import styled from 'styled-components';
import {Theme} from '../../types';

export const Bar = styled.span<{theme: Theme}>`
  display: block;
  position: absolute;
  height: 2px;
  background-color: ${({theme}) => theme.color};
  transition: transform 0.3s, width 0.3s, left 0.3s, top 0.3s, right 0.3s, bottom 0.3s;
`;

export const StyledBurgerButton = styled.button`
  width: 40px;
  height: 40px;
`;

export const StyledBarContainer = styled.span`
  display: block;
  width: 38px;
  height: 26px;
  position: relative;

  span:nth-of-type(1) {
    width: 60%;
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
    width: 60%;
    bottom: 0;
    right: 0;
  }

  &.active {
    span:nth-of-type(1) {
      top: 7px;
      left: 14px;
      transform: rotate(-45deg);
    }
    span:nth-of-type(2) {
      transform: rotate(45deg);
    }
    span:nth-of-type(3) {
      bottom: 6px;
      right: 12px;
      transform: rotate(-45deg);
    }
  }
`;
