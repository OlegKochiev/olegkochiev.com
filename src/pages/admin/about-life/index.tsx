import React from 'react';
import styled from 'styled-components';
import LifeCard from '../../../components/Admin/AboutLife/LifeCard/LifeCard';
import {Main} from '../../../components/PageContainer';
import {Title} from '../../../components/Admin/AboutLife/PageTitle/StyledPageTitle';
import AdminPageLayout from '../../../components/Admin/AdminPageLayout/AdminPageLayout';
import {CardsContainer} from '../../../components/UI/CardsContainer/StyledCardsContainer';

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

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: center;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

export default function AboutLife() {
  return (
    <AdminPageLayout>
      <Container>
        <CardsContainer>
          {mockData.map(({id, title, items}) => (
            <LifeCard key={id} id={id} title={title} items={items} />
          ))}
        </CardsContainer>
      </Container>
    </AdminPageLayout>
  );
}
