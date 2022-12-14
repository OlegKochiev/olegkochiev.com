import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import Cosmonaut from '../components/404/Cosmonaut';
import SadSmile from '../components/404/SadSmile';
import Header from '../components/Header';
import {PATHS} from '../constants';

const Main = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  gap: 20px;
  height: 100%;
`;

const DescContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 600px;
`;

const H1 = styled.h1`
  font-size: 120px;
  font-weight: bold;
`;

const H2 = styled.h2`
  font-size: 32px;
`;

const Desc = styled.p``;

const Button = styled.button`
  width: fit-content;
  padding: 10px;
  border: 1px solid #078080;
  transition: background-color 0.2s, color 0.2s;
  &:hover {
    background-color: #078080;
    color: white;
  }
`;
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 20px 15px;
`;

const Error404 = () => {
  return (
    <PageContainer>
      <Header />
      <Main>
        <Cosmonaut />
        <DescContainer>
          <H1>404</H1>
          <H2>
            Упс! Похоже что ты заблудился <SadSmile />
          </H2>

          <Desc>
            Страница, которую ты ищешь, не существует. Как ты сюда попал, остается загадкой. Но ты можешь нажать на
            кнопку ниже, чтобы вернуться на главную страницу.
          </Desc>
          <Button>
            <Link href={PATHS.HOME()}>На главную</Link>
          </Button>
        </DescContainer>
      </Main>
    </PageContainer>
  );
};

export default Error404;
