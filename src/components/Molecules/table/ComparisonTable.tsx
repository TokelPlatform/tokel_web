import { columns, data } from 'data/tableData';
import { useTable } from 'react-table';
import TableComponent from 'components/Atoms/Table';
import React from 'react';

type TableProps = {
  columns: any;
  data: any;
};

function Table({ columns, data }: TableProps) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });

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
