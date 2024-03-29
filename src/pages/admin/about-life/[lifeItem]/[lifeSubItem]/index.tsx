import React from 'react';
import {Container} from '../..';
import WideCard from '../../../../../components/Admin/AboutLife/WideCard/WideCard';
import {Priority, Status} from '../../../../../types';
import styled from 'styled-components';
import {Title} from '../../../../../components/Admin/AboutLife/PageTitle/StyledPageTitle';
import AdminPageLayout from '../../../../../components/Admin/AdminPageLayout/AdminPageLayout';
import {CardsContainer} from '../../../../../components/UI/CardsContainer/StyledCardsContainer';

const problemsTasks = [
  {
    id: '1',
    title: 'Tasweff few k1',
    status: Status.Done,
    priority: Priority.Low,
  },
  {
    id: '2',
    title: 'wef few f',
    status: Status.InProgress,
    priority: Priority.High,
  },
  {
    id: '3',
    title: 'Taskwf f fewwefw 3',
    status: Status.ToDo,
    priority: Priority.Medium,
  },
];

const featuresTasks = [
  {
    id: '1',
    title: 'Taswdwe wfe wef k1',
    status: Status.Done,
    priority: Priority.Medium,
  },
  {
    id: '2',
    title: 'Task2jdnkfw wjenfwefljkwef wefj wef',
    status: Status.InProgress,
    priority: Priority.Medium,
  },
  {
    id: '3',
    title: 'Task3',
    status: Status.InProgress,
    priority: Priority.High,
  },
];

const WideCardsContainer = styled(CardsContainer)`
  grid-template-columns: minmax(auto, 990px);
  grid-auto-rows: minmax(300px, auto);
`;

export default function LifeSubItemPage() {
  return (
    <AdminPageLayout>
      <Container>
        <Title>Life subitem</Title>
        <WideCardsContainer>
          <WideCard title="Problems" tasks={problemsTasks} />
          <WideCard title="Features" tasks={featuresTasks} />
        </WideCardsContainer>
      </Container>
    </AdminPageLayout>
  );
}
