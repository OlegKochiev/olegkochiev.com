import React, {useState} from 'react';
import {Priority, Status} from '../../../../../types';

type SortField = 'title' | 'priority' | 'status';

interface Props {
  tasks: Array<{title: string; status: Status; priority: Priority}>;
}

export default function TasksTable({tasks}: Props) {
  const [sortedField, setSortedField] = useState<SortField | null>(null);
  const [sortOrder, setSortOrder] = useState<number>(1);

  let sortedTasks = sortedField
    ? [...tasks].sort((a, b) => {
        if (a[sortedField] < b[sortedField]) return sortOrder;
        if (a[sortedField] > b[sortedField]) return sortOrder;
        return 0;
      })
    : tasks;

  const handleFilterClick = (sortFieldName: SortField) => {
    if (sortFieldName !== sortedField) {
      setSortedField(sortFieldName);
      setSortOrder(-1);
    } else {
      setSortOrder(sortOrder * -1);
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>
            <button type="button" onClick={() => handleFilterClick('title')}>
              Наименование
            </button>
          </th>
          <th>
            <button type="button" onClick={() => handleFilterClick('priority')}>
              Приоритет
            </button>
          </th>
          <th>
            <button type="button" onClick={() => handleFilterClick('status')}>
              Статус
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedTasks.map(({title, status, priority}) => (
          <tr key={title}>
            <td>{title}</td>
            <td>{status}</td>
            <td>{priority}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
