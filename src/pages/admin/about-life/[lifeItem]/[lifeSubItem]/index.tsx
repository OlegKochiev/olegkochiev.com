import React from 'react';
import {Container, LifeCardsContainer} from '../..';
import WideCard from '../../../../../components/Admin/AboutLife/WideCard/WideCard';
import {Priority, Status} from '../../../../../types';
import styled from 'styled-components';

const problemsTasks = [
  {
    title: 'Task1',
    status: Status.Done,
    priority: Priority.Low,
  },
  {
    title: 'Task2',
    status: Status.InProgress,
    priority: Priority.High,
  },
  {
    title: 'Task3',
    status: Status.ToDo,
    priority: Priority.Medium,
  },
];

const featuresTasks = [
  {
    title: 'Task1',
    status: Status.Done,
    priority: Priority.Medium,
  },
  {
    title: 'Task2',
    status: Status.InProgress,
    priority: Priority.Medium,
  },
  {
    title: 'Task3',
    status: Status.InProgress,
    priority: Priority.High,
  },
];

const WideCardsContainer = styled(LifeCardsContainer)`
  grid-template-columns: minmax(auto, 990px);
  grid-auto-rows: minmax(400px, auto);
`;

export default function LifeSubItemPage() {
  return (
    <Container>
      <h1>Life subitem</h1>
      <WideCardsContainer>
        <WideCard title="Problems" tasks={problemsTasks} />
        <WideCard title="Features" tasks={featuresTasks} />
      </WideCardsContainer>
    </Container>
  );
}
