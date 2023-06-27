import styled from 'styled-components';

const Main = styled.main`
  grid-area: main;
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
`;

export {Container, Main};
