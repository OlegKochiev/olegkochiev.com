import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header/Header';
import PageContainer from '../../components/PageContainer';
import {PAGES} from '../../constants';
import Footer from '../../components/Footer/Footer';

interface Project {
  tags: string[];
  title: string;
  description: string;
  data: string;
  link: string;
  stackTechnologies: string[];
}

const projects: Project[] = [
  {
    tags: ['React', 'frontend', 'SSR', 'SSG'],
    title: 'Образовательный портал strada',
    description: 'Платформа для самообразования. ',
    data: '01.01.2023',
    link: 'https://strada.onne',
    stackTechnologies: ['React', 'NextJS', 'TypeScript', 'Redux(RTK)', 'React hook form', 'MUI(material UI)'],
  },
];

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin-bottom: auto;
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
    <PageContainer>
      <Header />
      <Content>
        {projectsByData.map(([year, projects]) => (
          <Section key={year}>
            <Year>{year}</Year>
            <ProjectsContainer>
              {projects.map((project, index) => (
                <Article key={project.title + index}>
                  <Tags>
                    {project.tags.map((tag) => (
                      <Link key={tag} href={PAGES.PORTFOLIO.byTag(tag)}>
                        <Tag>#{tag}</Tag>
                      </Link>
                    ))}
                  </Tags>
                  <Link href={PAGES.PORTFOLIO.byName(project.title)}>
                    <Title>{project.title}</Title>
                  </Link>
                  <Description>{project.description}</Description>
                </Article>
              ))}
            </ProjectsContainer>
          </Section>
        ))}
      </Content>
      <Footer />
    </PageContainer>
  );
};

export default Portfolio;
