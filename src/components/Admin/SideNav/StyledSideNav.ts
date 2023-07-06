import styled from 'styled-components';
import {THEME} from '../../../constants';

const Span = styled.span<{isActive: boolean}>`
  display: block;
  padding: 20px;
  color: ${({isActive}) => (isActive ? THEME.GOLD.color : 'inherit')};
  transition: background-color 0.08s;
  border-bottom: 1px solid ${({isActive}) => (isActive ? THEME.GOLD.darkShade : 'transparent')};
  &:hover {
    color: white;
    border-bottom: 1px solid ${THEME.GOLD.darkShade};
  }
`;
const Li = styled.li``;
const Ul = styled.ul`
  width: 100%;
`;
const Nav = styled.nav`
  flex-grow: 1;
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
const Container = styled.div`
  grid-area: SideNav;
  display: flex;
  flex-direction: column;
  color: ${THEME.GOLD.lightShade};
  border-right: 2px solid ${THEME.GOLD.lineColor};
`;

export {Span, Li, Ul, Nav, NavHeader, NavFooter, Container};
