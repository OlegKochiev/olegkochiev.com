import styled from 'styled-components';

export const StyledMenuContainer = styled.div<{isOpen: boolean}>`
  position: fixed;
  z-index: 1;
  top: 64px;
  width: 100vw;
  height: 100vh;
  transition: transform 0.2s ease-out;
  transform: translateX(${({isOpen}) => (isOpen ? '-4%' : '100%')});
`;

export const StyledBackBlur = styled.div<{isOpen: boolean}>`
  width: 100%;
  height: 100%;
  backdrop-filter: blur(${({isOpen}) => (isOpen ? '5px' : '0')});
  transition: backdrop-filter 0.2s;
`;

export const StyledMenuContent = styled.div<{isOpen: boolean}>`
  position: absolute;
  right: 0;
  width: 40%;
  height: 100%;
`;
