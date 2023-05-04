import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import PageContainer from '../../components/PageContainer';
import {Content, Section} from '../portfolio';
import ThemeContainer from '../../components/ThemeContainer';
import Footer from '../../components/Footer/Footer';
import FeedbackForm from '../../components/FeedbackForm/FeedbackForm';

const Title = styled.p`
  text-align: end;
  @media (max-width: 770px) {
    text-align: start;
    font-size: 16px;
    font-weight: bold;
  }
`;
const DescriptionsContainer = styled.div``;
const Description = styled.p`
  white-space: pre-wrap;
`;

const aboutMe = [
  {
    title: 'Привет:',
    descriptions: [
      `Меня зовут Олег. Я frontend-разработчик. Занимаюсь разработкой более 2-х лет.
Помимо основных технического стека, также владею:
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
    title: 'Технический стек:',
    descriptions: [
      `ReactJS
Redux(RTK)
TypeScript
JavaScript(ES6)
HTML5/CSS3
NodeJS
ExpressJS
NextJS
MUI
Git`,
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
        <Content>
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
        </Content>
        <FeedbackForm />
        <Footer />
      </PageContainer>
    </ThemeContainer>
  );
};

export default AboutMe;
