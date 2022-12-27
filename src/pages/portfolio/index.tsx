import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import PageContainer from '../../components/PageContainer';

const portfolioDatas = [
  {
    tags: ['react', 'next.js'],
    title: 'Создание собственного сайта портфолио',
    data: '01.01.2023',
    stackTechnologies: [],
  },
];

const Main = styled.main``;
const Section = styled.section``;
const Article = styled.article``;

const Portfolio = () => {
  return (
    <PageContainer>
      <Header />
      <Main>
        <Section>
          <Article></Article>
        </Section>
      </Main>
    </PageContainer>
  );
};

export default Portfolio;
