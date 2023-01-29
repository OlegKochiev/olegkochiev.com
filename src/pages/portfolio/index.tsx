import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import PageContainer from '../../components/PageContainer';
import {PATHS} from '../../constants';

interface Project {
  tags: string[];
  title: string;
  description: string;
  data: string;
  stackTechnologies: string[];
}

const projects: Project[] = [
  {
    tags: ['react', 'next.js'],
    title: 'Создание собственного сайта портфолио5',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, deserunt.',
    data: '01.01.2023',
    stackTechnologies: [],
  },
  {
    tags: ['react', 'next.js'],
    title: 'Создание собственного сайта портфолио8',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, deserunt.',
    data: '01.01.2022',
    stackTechnologies: [],
  },
  {
    tags: ['react', 'next.js'],
    title: 'Создание собственного сайта портфолио1',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, deserunt.',
    data: '01.01.2023',
    stackTechnologies: [],
  },
  {
    tags: ['react', 'next.js'],
    title: 'Создание собственного сайта портфолио2',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta dignissimos hic fugiat dolore totam numquam eum inventore dolores commodi nulla.',
    data: '01.01.2021',
    stackTechnologies: [],
  },
  {
    tags: ['react', 'next.js'],
    title: 'Создание собственного сайта портфолио3',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, deserunt.',
    data: '01.01.2021',
    stackTechnologies: [],
  },
  {
    tags: ['react', 'next.js'],
    title: 'Создание собственного сайта портфолио5',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, deserunt.',
    data: '01.01.2023',
    stackTechnologies: [],
  },
  {
    tags: ['react', 'next.js'],
    title: 'Создание собственного сайта портфолио8',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, deserunt.',
    data: '01.01.2022',
    stackTechnologies: [],
  },
  {
    tags: ['react', 'next.js'],
    title: 'Создание собственного сайта портфолио1',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, deserunt.',
    data: '01.01.2023',
    stackTechnologies: [],
  },
  {
    tags: ['react', 'next.js'],
    title: 'Создание собственного сайта портфолио2',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta dignissimos hic fugiat dolore totam numquam eum inventore dolores commodi nulla.',
    data: '01.01.2021',
    stackTechnologies: [],
  },
  {
    tags: ['react', 'next.js'],
    title: 'Создание собственного сайта портфолио3',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, deserunt.',
    data: '01.01.2021',
    stackTechnologies: [],
  },
];

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;
export const Section = styled.section`
  display: grid;
  grid-template-columns: 170px 550px;
  grid-gap: 30px;
`;
const Year = styled.div`
  text-align: end;
`;
const ProjectsContainer = styled.div``;
const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  margin-bottom: 30px;
`;
const Tags = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;
const Tag = styled.div`
  font-size: 14px;
  border-bottom: 1px solid transparent;
  &:hover {
    border-color: inherit;
  }
`;
const Title = styled.h2`
  border-bottom: 1px solid transparent;
  &:hover {
    border-color: inherit;
  }
`;
const Description = styled.h3`
  font-size: 15px;
`;

const Portfolio = () => {
  let projectsByYear: {[key: string]: Project[]} = {};
  projects.forEach((project) => {
    if (!projectsByYear[project.data]) projectsByYear[project.data] = [];
    projectsByYear[project.data].push(project);
  });

  const projectsByData = Object.entries(projectsByYear);

  return (
    <PageContainer>
      <Header />
      <Main>
        {projectsByData.map(([year, projects]) => (
          <Section key={year}>
            <Year>{year}</Year>
            <ProjectsContainer>
              {projects.map((project) => (
                <Article key={project.title}>
                  <Tags>
                    {project.tags.map((tag) => (
                      <Link key={tag} href={PATHS.PORTFOLIO.BY_TAG(tag)}>
                        <Tag>#{tag}</Tag>
                      </Link>
                    ))}
                  </Tags>
                  <Link href={PATHS.PORTFOLIO.BY_NAME(project.title)}>
                    <Title>{project.title}</Title>
                  </Link>
                  <Description>{project.description}</Description>
                </Article>
              ))}
            </ProjectsContainer>
          </Section>
        ))}
      </Main>
    </PageContainer>
  );
};

export default Portfolio;
