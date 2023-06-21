import React from 'react';
import {Card, CardBody, CardFooter, CardTitle, Item, List} from '../../../UI/Card/StyledCard';
import {Priority, Status} from '../../../../types';
import TasksTable from './TasksTable/TasksTable';

interface Props {
  title: string;
  tasks: Array<{title: string; status: Status; priority: Priority}>;
}

export default function WideCard({title, tasks}: Props) {
  return (
    <Card>
      <CardTitle>{title}</CardTitle>
      <CardBody>
        <TasksTable tasks={tasks} />
      </CardBody>
      <CardFooter></CardFooter>
    </Card>
  );
}
