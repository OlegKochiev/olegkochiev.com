import React from 'react';
import styled from 'styled-components';
import LifeCard from '../../../components/Admin/AboutLife/LifeCard/LifeCard';
import {Main} from '../../../components/PageContainer';
import {Title} from '../../../components/Admin/AboutLife/PageTitle/StyledPageTitle';

const mockData = [
  {
    id: '1',
    title: 'Some title1',
    items: [
      {
        id: '1',
        title: 'subtitle1',
        tasksCount: 20,
        resolvedCount: 4,
      },
      {
        id: '2',
        title: 'subtitle2',
        tasksCount: 20,
        resolvedCount: 4,
      },
      {
        id: '4',
        title: 'subtitle3',
        tasksCount: 20,
        resolvedCount: 4,
      },
    ],
  },
  {
    id: '2',
    title: 'Some title2',
    items: [
      {
        id: '1',
        title: 'subtitle23',
        tasksCount: 20,
        resolvedCount: 4,
      },
      {
        id: '2',
        title: 'subtitle232',
        tasksCount: 202,
        resolvedCount: 43,
      },
      {
        id: '4',
        title: 'subtitle1',
        tasksCount: 220,
        resolvedCount: 434,
      },
    ],
  },
  {
    id: '3',
    title: 'Some title3',
    items: [
      {
        id: '1',
        title: 'subtitle23',
        tasksCount: 20,
        resolvedCount: 4,
      },
      {
        id: '2',
        title: 'subtitle232',
        tasksCount: 202,
        resolvedCount: 43,
      },
      {
        id: '4',
        title: 'subtitle1',
        tasksCount: 220,
        resolvedCount: 434,
      },
    ],
  },
];

export const Container = styled(Main)`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: center;
  background-image: url('/images/bg2.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  font-family: 'Nunito';
`;

export const LifeCardsContainer = styled.section`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, minmax(auto, 500px));
  grid-auto-rows: minmax(250px, auto);
  grid-gap: 20px;
  max-width: 90vw;
  width: 100%;
  @media (max-width: 1400px) {
    grid-template-columns: repeat(2, minmax(auto, 500px));
  }
  @media (max-width: 900px) {
    grid-template-columns: repeat(1, minmax(auto, 500px));
  }
`;

export default function AboutLife() {
  return (
    <Container>
      <Title>About Life</Title>
      <LifeCardsContainer>
        {mockData.map(({id, title, items}) => (
          <LifeCard key={id} id={id} title={title} items={items} />
        ))}
      </LifeCardsContainer>
    </Container>
  );
}
