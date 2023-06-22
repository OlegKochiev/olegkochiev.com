import React from 'react';
import Link from 'next/link';
import {Card, CardBody, CardFooter, CardTitle} from './StyledCard';

import {PAGES} from '../../../constants';

interface Props {
  title: string;
  items: string[];
}

export default function StyledCard({title, items}: Props) {
  return (
    <Card>
      <CardTitle>{title}</CardTitle>
      <CardBody></CardBody>
      <CardFooter>Подробнее..</CardFooter>
    </Card>
  );
}
