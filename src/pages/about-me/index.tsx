import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import NavLinks from '../../components/Home/NavLinks';
import PageContainer from '../../components/PageContainer';
import {Main, Section} from '../portfolio';

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
      'Я Олег, frontend2 react разработчик tex12t tex12t  tex12t tex12t  tex12t tex12t  tex12t tex12t ',
      'Я Олег, frontend rfeact разработчик tex12t tex12t  tex12t tex12t  tex12t tex12t  tex12t tex12t ',
      'Я Олег, frontensd react разработчик tex12t tex12t  tex12t tex12t  tex12t tex12t  tex12t tex12t ',
    ],
  },
  {
    title: 'Технический стек',
    descriptions: ['2', 'te2xt', 'te3xt'],
  },
  {
    title: 'Готовность к переезду',
    descriptions: ['t6ext', 'te5t', 'tex4t'],
  },
  {
    title: 'Владение английским',
    descriptions: ['te7xt', 'te8xt', 'tex9t'],
  },
];

const AboutMe = () => {
  return (
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
  );
};

export default AboutMe;
