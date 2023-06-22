import React, {useState} from 'react';
import {Priority, Status} from '../../../../../types';
import EditIcon from '../../../../UI/EditIcon/EditIcon';
import DeleteIcon from '../../../../UI/DeleteIcon/DeleteIcon';
import {ActionButton, TBody, THead, Table, Td, Th, Tr} from '../../../../UI/Table/StyledTable';

enum SortFields {
  Title = 'title',
  Priority = 'priority',
  Status = 'status',
}

type SortField = SortFields;

interface Props {
  tasks: Array<{id: string; title: string; status: Status; priority: Priority}>;
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

  const handleEditClick = (id: string) => {
    console.log(id);
  };
  const handleDeleteClick = (id: string) => {
    console.log(id);
  };

  return (
    <Table>
      <THead>
        <Tr>
          <Th>
            <button type="button" onClick={() => handleFilterClick(SortFields.Title)}>
              Наименование
            </button>
          </Th>
          <Th>
            <button type="button" onClick={() => handleFilterClick(SortFields.Priority)}>
              Приоритет
            </button>
          </Th>
          <Th>
            <button type="button" onClick={() => handleFilterClick(SortFields.Status)}>
              Статус
            </button>
          </Th>
          <Th colSpan={2}>Действие</Th>
        </Tr>
      </THead>
      <TBody>
        {sortedTasks.map(({id, title, status, priority}) => (
          <Tr key={title}>
            <Td>{title}</Td>
            <Td>{status}</Td>
            <Td>{priority}</Td>
            <Td>
              <ActionButton onClick={() => handleEditClick(id)}>
                <EditIcon width={24} />
              </ActionButton>
            </Td>
            <Td>
              <ActionButton onClick={() => handleDeleteClick(id)}>
                <DeleteIcon width={24} />
              </ActionButton>
            </Td>
          </Tr>
        ))}
      </TBody>
    </Table>
  );
}
