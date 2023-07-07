import styled from 'styled-components';
import {THEME} from '../../../constants';

const Main = styled.main`
  flex-grow: 1;
  padding: 15px;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  overflow: auto;
  flex-direction: column;
  justify-content: space-between;
`;

const Container = styled.div`
  height: 100vh;
  display: flex;
  background-color: ${THEME.GOLD.backgroundColor};
  font-family: 'Nunito';
  color: ${THEME.GOLD.lightShade};
`;

export {Container, Main, Wrapper};
