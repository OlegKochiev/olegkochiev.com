import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import PageContainer from '../../components/PageContainer';
import {PATHS} from '../../constants';

const projects = [
  {
    tags: ['react', 'next.js'],
    title: 'Создание собственного сайта портфолио',
    data: '01.01.2023',
    stackTechnologies: [],
  },
  {
    tags: ['react', 'next.js'],
    title: 'Создание собственного сайта портфолио',
    data: '01.01.2023',
    stackTechnologies: [],
  },
  {
    tags: ['react', 'next.js'],
    title: 'Создание собственного сайта портфолио',
    data: '01.01.2023',
    stackTechnologies: [],
  },
];

const Main = styled.main``;
const Section = styled.section``;
const Article = styled.article`
  display: grid;
  grid-template-columns: 120px 550px;
  grid-gap: 30px;
`;
const Tags = styled.div`
  display: flex;
  gap: 10px;
`;
const Tag = styled.div`
  font-size: 14px;
`;
const Title = styled.div``;
const Description = styled.div``;

const Portfolio = () => {
  return (
    <PageContainer>
      <Header />
      <Main>
        {projects.map((project) => (
          <Section>
            <Article>
              <Tags>
                {project.tags.map((tag) => (
                  <Link href={PATHS.PORTFOLIO.BY_TAG(tag)}>
                    <Tag>#{tag}</Tag>
                  </Link>
                ))}
              </Tags>
              <Title></Title>
              <Description></Description>
            </Article>
          </Section>
        ))}
      </Main>
    </PageContainer>
  );
};

export default Portfolio;
