import React from 'react';
import styled from 'styled-components';
import DefaultButton from '../../../DefaultComponents/Button';

const Container = styled.div``;

const Table = styled.table``;
const Caption = styled.caption`
  margin-bottom: 15px;
`;
const Th = styled.th``;
const Tr = styled.tr``;
const Td = styled.td``;
const Icon = styled.span`
  display: inline-block;
  width: 30px;
  height: 30px;
  background-color: #404040;
  mask-position: center;
  mask-repeat: no-repeat;
`;

const DeletIcon = styled(Icon)`
  mask-image: url('/icons/delete.svg');
`;
const EditIcon = styled(Icon)`
  mask-image: url('/icons/edit.svg');
`;

const EditButton = styled(DefaultButton)`
  padding: 0;
`;
const DeleteButton = styled(DefaultButton)`
  padding: 0;
`;

const PortfolioTab = () => {
  return (
    <Container>
      <Table>
        <Caption>Список проектов:</Caption>
        <thead>
          <Tr>
            <Th>Описание</Th>
            <Th colSpan={2}>Действия</Th>
          </Tr>
        </thead>
        <tbody>
          <Tr>
            <Td>Создание собственного сайта портфолио5</Td>
            <Td>
              <DeleteButton>
                Удалить
                <DeletIcon />
              </DeleteButton>
            </Td>
            <Td>
              <EditButton>
                Редактировать
                <EditIcon />
              </EditButton>
            </Td>
          </Tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default PortfolioTab;
