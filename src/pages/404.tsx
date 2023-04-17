import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import Cosmonaut from '../components/404/Cosmonaut';
import SadSmile from '../components/404/SadSmile';
import DefaultButton from '../components/DefaultComponents/Button';
import Header from '../components/Header';
import {PATHS} from '../constants';
import ThemeContainer from '../components/ThemeContainer';

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

const Button = styled(DefaultButton)``;
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 20px 15px;
`;

const Error404 = () => {
  return (
    <ThemeContainer>
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
    </ThemeContainer>
  );
};

export default Error404;
