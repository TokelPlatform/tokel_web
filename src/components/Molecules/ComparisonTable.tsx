import { columns, data } from '../../helpers/tableConfig';

import React from 'react';
import styled from '@emotion/styled';
import { useTable } from 'react-table';

type TableProps = {
  columns: any;
  data: any;
};

const TableComponent = styled.table`
  font-size: 26px;
  p {
    color: rgb(255, 255, 255, 0.8);
  }

  padding: 1rem;
  border-spacing: 0;

  tr > td:first-child {
    color: rgb(255, 255, 255, 0.8);
    text-align: left;
    font-size: var(--font-size-p);
    font-weight: 400;
    text-transform: uppercase;
  }

  tr {
    :last-child {
      td {
        border-bottom: 0;
      }
    }
  }

  tr > td {
    min-width: 150px;
    text-align: center;
  }

  td {
    margin: 0;
    padding: 0.5rem 1rem;
    border-bottom: 1px solid rgb(255, 255, 255, 0.5);
    border-right: 1px solid rgb(255, 255, 255, 0.5);

    :last-child {
      border-right: 0;
    }
  }

  tr:first-child {
    td:last-child {
      border-top: 10px solid;
      // border-image-source: var(--gradient-purple-direct);
    }
  }
  tr:last-child {
    td:last-child {
      border-bottom: 10px solid;
      // border-image-source: var(--gradient-purple-direct);
    }
  }

  td:nth-child(4) {
    border-right: 10px solid;
    border-left: 10px solid;
    // border-image-source: var(--gradient-purple-direct);
  }
`;

function Table({ columns, data }: TableProps) {
  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });

  // Render the UI for your table
  return (
    <TableComponent {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup, idx) => (
          <tr key={idx} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th key={idx} {...column.getHeaderProps()}>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr key={i} {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <td key={i} {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </TableComponent>
  );
}

const ComparisonTable = () => <Table columns={columns} data={data} />;

export default ComparisonTable;
