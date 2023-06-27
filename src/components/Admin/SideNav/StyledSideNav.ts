import styled from 'styled-components';

const Span = styled.span<{isActive: boolean}>`
  display: block;
  padding: 20px;
  &:hover {
    background-color: #8af;
    color: white;
  }
  background-color: ${({isActive}) => (isActive ? '#078080' : 'inheirit')};
  color: ${({isActive}) => (isActive ? 'white' : 'black')};
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
  background-color: #8af;
`;
const Container = styled.div`
  grid-area: SideNav;
  display: flex;
  flex-direction: column;
  background-color: #baf;
`;

export {Span, Li, Ul, Nav, NavHeader, NavFooter, Container};
