import styled from 'styled-components';
import {THEME} from '../../../constants';

const Main = styled.main`
  grid-area: main;
  padding: 15px;
`;

const Container = styled.div`
  display: grid;
  height: 100vh;
  font-family: 'Nunito';

  grid-template-areas:
    'SideNav header'
    'SideNav main'
    'SideNav footer';
  grid-template-columns: 1fr 6fr;
  grid-template-rows: 60px 1fr minmax(60px, auto);
  background-color: ${THEME.GOLD.backgroundColor};
  color: ${THEME.GOLD.darkShade};
`;

export {Container, Main};
