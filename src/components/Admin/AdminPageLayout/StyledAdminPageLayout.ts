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
  grid-template-columns: 300px 4fr;
  grid-template-rows: 70px 1fr 80px;
`;

export {Container, Main};
