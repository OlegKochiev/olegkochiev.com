import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  position: sticky;
  top: 0;
  margin-bottom: 20px;
  background-color: ${({theme}) => theme.backgroundColor};
  color: ${({theme}) => theme.color};
  transition: background-color 0.25s, color 0.25s;
  @media (max-width: 770px) {
    display: block;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 170px 550px;
  grid-gap: 30px;
  align-content: center;
  @media (max-width: 770px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  @media (max-width: 770px) {
    display: none;
  }
`;

export const Logo = styled.div`
  padding-bottom: 5px;
  font-size: 22px;
  font-weight: bold;
  text-align: end;
`;
