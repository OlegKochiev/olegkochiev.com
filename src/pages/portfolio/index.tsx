import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import PageContainer from '../../components/PageContainer';
import {PATHS} from '../../constants';
import ThemeContainer from '../../components/ThemeContainer';

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
  @media (max-width: 770px) {
    align-items: flex-start;
    gap: 20px;
  }
`;
export const Section = styled.section`
  display: grid;
  grid-template-columns: 170px 550px;
  grid-gap: 30px;
  @media (max-width: 770px) {
    grid-template-columns: 1fr;
    grid-gap: 15px;
  }
`;
const Year = styled.div`
  text-align: end;
  @media (max-width: 770px) {
    text-align: start;
  }
`;
const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media (max-width: 770px) {
    gap: 15px;
  }
`;
const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  @media (max-width: 770px) {
    gap: 0;
  }
`;
const Tags = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  @media (max-width: 770px) {
    margin-bottom: 0;
  }
`;
const Tag = styled.div`
  font-size: 14px;
  border-bottom: 1px solid transparent;
  &:hover {
    border-color: inherit;
  }
  @media (max-width: 770px) {
    border: none;
    padding: 10px 0;
  }
`;
const Title = styled.h3`
  border-bottom: 1px solid transparent;
  font-size: 15px;
  &:hover {
    border-color: inherit;
  }
  @media (max-width: 770px) {
    padding: 10px 0;
    border: none;
  }
`;
const Description = styled.p``;

const Portfolio = () => {
  let projectsByYear: {[key: string]: Project[]} = {};
  projects.forEach((project) => {
    if (!projectsByYear[project.data]) projectsByYear[project.data] = [];
    projectsByYear[project.data].push(project);
  });

  const projectsByData = Object.entries(projectsByYear);

  return (
    <ThemeContainer>
      <PageContainer>
        <Header />
        <Main>
          {projectsByData.map(([year, projects]) => (
            <Section key={year}>
              <Year>{year}</Year>
              <ProjectsContainer>
                {projects.map((project, index) => (
                  <Article key={project.title + index}>
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
    </ThemeContainer>
  );
};

export default Portfolio;
