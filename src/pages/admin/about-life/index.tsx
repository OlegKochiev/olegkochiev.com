import React from 'react';
import styled from 'styled-components';
import LifeCard from '../../../components/Admin/AboutLife/LifeCard/LifeCard';
import {Main} from '../../../components/PageContainer';

const mockData = [
  {
    title: 'Some title1',
    items: ['Some item1', 'Some item2', 'Some item3', 'Some item4', 'Some item5', 'Some item6', 'Some item7'],
  },
  {
    title: 'Some title2',
    items: ['Some item1', 'Some item2', 'Some item3', 'Some item4', 'Some item5', 'Some item6', 'Some item7'],
  },
  {
    title: 'Some title3',
    items: ['Some item1', 'Some item2', 'Some item3', 'Some item4', 'Some item5', 'Some item6', 'Some item7'],
  },
  {
    title: 'Some title4',
    items: ['Some item1', 'Some item2', 'Some item3', 'Some item4', 'Some item5', 'Some item6', 'Some item7'],
  },
  {
    title: 'Some title5',
    items: ['Some item1', 'Some item2', 'Some item3', 'Some item4', 'Some item5', 'Some item6', 'Some item7'],
  },
  {
    title: 'Some title6',
    items: ['Some item1', 'Some item2', 'Some item3', 'Some item4', 'Some item5', 'Some item6', 'Some item7'],
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
  grid-template-columns: repeat(3, minmax(auto, 550px));
  grid-auto-rows: minmax(300px, auto);
  grid-gap: 20px;
  max-width: 90vw;
  width: 100%;
  @media (max-width: 1400px) {
    grid-template-columns: repeat(2, minmax(auto, 550px));
  }
  @media (max-width: 900px) {
    grid-template-columns: repeat(1, minmax(auto, 550px));
  }
`;

export default function AboutLife() {
  return (
    <Container>
      <h1>About Life</h1>
      <LifeCardsContainer>
        {mockData.map((item) => (
          <LifeCard key={item.title} title={item.title} items={item.items} />
        ))}
      </LifeCardsContainer>
    </Container>
  );
}
