import React from 'react';
import Link from 'next/link';
import {Card, CardBody, CardFooter, CardTitle, Item, List} from './StyledCard';

import {PAGES} from '../../../constants';

interface Props {
  title: string;
  items: string[];
}

export default function StyledCard({title, items}: Props) {
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
      <CardFooter>Подробнее..</CardFooter>
    </Card>
  );
}
