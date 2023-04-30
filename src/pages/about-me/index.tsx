import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import NavLinks from '../../components/Home/NavLinks';
import PageContainer from '../../components/PageContainer';
import {Main, Section} from '../portfolio';
import ThemeContainer from '../../components/ThemeContainer';

const Hello = styled.h1``;
const Title = styled.p`
  text-align: end;
`;
const DescriptionsContainer = styled.div``;
const Description = styled.p`
  margin-bottom: 10px;
`;

const aboutMe = [
  {
    title: '',
    descriptions: [
      `Меня зовут Олег. Я frontend-разработчик. Занимаюсь разработкой более 2-х лет.
      Помимо основных навыков, есть опыт работы с:
        - сборщиком проектов Webpack
        - системой контроля версий Git
        - системой управления проектами Jira/Space
        - фреймворк для тестирования - Jest
        - UI библиотеками: MUI, Bootstrap, Styled-components
        - backend: nodejs (ExpressJS)
        - Базами данных: noSQL - mongodb, SQL - MySQL
        - GraphQL`,
    ],
  },
  {
    title: 'Технический стек',
    descriptions: [
      'ReactJS',
      'Redux(RTK)',
      'TypeScript',
      'JavaScript(ES6)',
      'HTML5/CSS3',
      'NodeJS',
      'ExpressJS',
      'NextJS',
      'MUI',
      'Git',
    ],
  },
  {
    title: 'Готовность к переезду:',
    descriptions: ['Готов'],
  },
  {
    title: 'Владение английским:',
    descriptions: ['B1'],
  },
];

const AboutMe = () => {
  return (
    <ThemeContainer>
      <PageContainer>
        <Header />
        <Main>
          <Section>
            <Title />
            <Hello>Привет!</Hello>
          </Section>
          {aboutMe.map((info) => (
            <Section key={info.title}>
              <Title> {info.title} </Title>
              <DescriptionsContainer>
                {info.descriptions.map((description) => (
                  <Description key={description}>{description}</Description>
                ))}
              </DescriptionsContainer>
            </Section>
          ))}
        </Main>
      </PageContainer>
    </ThemeContainer>
  );
};

export default AboutMe;
