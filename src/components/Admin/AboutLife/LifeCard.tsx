import Link from 'next/link';
import React from 'react';

import styled from 'styled-components';
import {PAGES} from '../../../constants';

const Card = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;

  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);

  backdrop-filter: blur(8px);
`;

const CardTitle = styled.h3`
  align-self: center;
  font-size: 18px;
`;
const CardBody = styled.div`
  margin-top: 10px;
`;
const CardFooter = styled.div`
  margin-top: 10px;
  align-self: end;
`;
const List = styled.ul``;
const Item = styled.li`
  padding: 4px;
  transition: border-color 0.1s;
  border-bottom: 2px solid transparent;
  &:hover {
    border-color: rgba(0, 0, 0, 0.2);
  }
`;

interface Props {
  title: string;
  items: string[];
}

export default function LifeCard({title, items}: Props) {
  return (
    <Card>
      <CardTitle>{title}</CardTitle>
      <CardBody>
        <List>
          {items.map((item) => (
            <Item key={item}>
              <Link href={PAGES.ADMIN.ABOUT_LIFE.byLifeItem(title, item)}>{item}</Link>
            </Item>
          ))}
        </List>
      </CardBody>
      <CardFooter>Подробнее об этом пункте</CardFooter>
    </Card>
  );
}
