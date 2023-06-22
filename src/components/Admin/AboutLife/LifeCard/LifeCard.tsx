import React from 'react';
import {Card, CardBody, CardFooter, CardTitle} from '../../../UI/Card/StyledCard';
import {TBody, THead, Table, Td, Th, Tr} from '../../../UI/Table/StyledTable';
import CustomLink from '../../../UI/Link/Link';

import {PAGES} from '../../../../constants';

interface Props {
  id: string;
  title: string;
  items: Array<{
    id: string;
    title: string;
    tasksCount: number;
    resolvedCount: number;
  }>;
}

export default function LifeCard({id, title, items}: Props) {
  return (
    <Card>
      <CardTitle>{title}</CardTitle>
      <CardBody>
        <Table>
          <THead>
            <Tr>
              <Th>Наименование</Th>
              <Th>Всего задач</Th>
              <Th>Выполнено</Th>
            </Tr>
          </THead>
          <TBody>
            {items.map(({id: itemId, title, tasksCount, resolvedCount}) => (
              <Tr key={itemId}>
                <Td>
                  <CustomLink href={PAGES.ADMIN.ABOUT_LIFE.byLifeItem(id, itemId)}>{title}</CustomLink>
                </Td>
                <Td>{tasksCount}</Td>
                <Td>{resolvedCount}</Td>
              </Tr>
            ))}
          </TBody>
        </Table>
      </CardBody>
      <CardFooter>Какая нибудь умная фраза</CardFooter>
    </Card>
  );
}
