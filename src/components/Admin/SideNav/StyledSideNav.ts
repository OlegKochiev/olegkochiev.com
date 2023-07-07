import styled from 'styled-components';
import {THEME} from '../../../constants';

const Span = styled.span<{isActive: boolean}>`
  display: block;
  padding: 20px 10px;
  color: ${({isActive}) => (isActive ? THEME.GOLD.color : 'inherit')};
  transition: background-color 0.08s;
  border-bottom: 1px solid ${({isActive}) => (isActive ? THEME.GOLD.darkShade : 'transparent')};
  transition: color 0.1s, border-color 0.1s;
  &:hover {
    color: ${THEME.GOLD.darkShade};
    border-bottom: 1px solid ${THEME.GOLD.darkShade};
  }
`;
const Li = styled.li``;
const Ul = styled.ul`
  width: 100%;
`;
const Nav = styled.nav`
  flex-grow: 1;
  padding: 0 15px;
  border-bottom: 1px solid ${THEME.GOLD.lineColor};
`;
const NavFooter = styled.div`
  padding: 40px;
`;
const NavHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 20px 30px;
  gap: 10px;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${THEME.GOLD.lineColor};
`;
const Container = styled.div<{isMenuOpen: boolean}>`
  width: 350px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  color: ${THEME.GOLD.lightShade};
  border-right: 2px solid ${THEME.GOLD.lineColor};
  transition: transform 0.2s;
  &.mobile {
    width: 100%;
    position: absolute;
    height: auto;
    top: 64px;
    z-index: 1;
    border-right: none;
    transform: ${({isMenuOpen}) => (isMenuOpen ? 'translateX(0)' : 'translateX(-100%)')};
    backdrop-filter: blur(${({isMenuOpen}) => (isMenuOpen ? '10px' : '0')});
  }
`;

export {Span, Li, Ul, Nav, NavHeader, NavFooter, Container};
