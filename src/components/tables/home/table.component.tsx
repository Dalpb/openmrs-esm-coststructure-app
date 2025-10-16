import {
  DataTable,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  DataTableHeader,
  DataTableRow,
  TableContainer,
  Button,
} from '@carbon/react';
import { TrashCan, Edit } from '@carbon/react/icons';
import React from 'react';

interface IRow {
  code: string;
  name: string;
  created_date: string;
  id: string;
}

const headers: DataTableHeader[] = [
  { key: 'code', header: 'Código' },
  { key: 'name', header: 'Nombre del procedimiento' },
  { key: 'created_date', header: 'Fecha creada' },
  { key: 'actions', header: 'Acciones' },
];

const HomeTable: React.FC = () => {
  const rows: IRow[] = [
    {
      id: '1',
      code: 'PROC001',
      name: 'Hemograma completo',
      created_date: '2025-10-10',
    },
    {
      id: '2',
      code: 'PROC002',
      name: 'Prueba de glucosa',
      created_date: '2025-10-12',
    },
  ];
  return (
    <DataTable rows={rows} headers={headers}>
      {({ getTableProps, getHeaderProps, getRowProps, getCellProps }) => (
        <Table {...getTableProps()}>
          <TableHead>
            <TableRow>
              {headers.map((header) => (
                <TableHeader {...getHeaderProps({ header })}>{header.header}</TableHeader>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <HomeTableRow key={row.id} row={row} getRowProps={getRowProps} getCellProps={getCellProps} />
            ))}
          </TableBody>
        </Table>
      )}
    </DataTable>
  );
};
interface HomeTableRowProps {
  row: IRow;
  getRowProps: any;
  getCellProps: any;
}
const HomeTableRow: React.FC<HomeTableRowProps> = ({ row, getRowProps, getCellProps }) => {
  return (
    <TableRow key={row.id} {...getRowProps({ row })}>
      <TableCell {...getCellProps({ cell: { id: `${row.id}-code` } })}>{row.code}</TableCell>
      <TableCell {...getCellProps({ cell: { id: `${row.id}-name` } })}>{row.name}</TableCell>
      <TableCell {...getCellProps({ cell: { id: `${row.id}-created` } })}>{row.created_date}</TableCell>
      <TableCell {...getCellProps({ cell: { id: `${row.id}-actions` } })}>
        <div>
          <Edit size={20} style={{ cursor: 'pointer' }} onClick={() => console.log('Editar', row.id)} />
          <TrashCan size={20} style={{ cursor: 'pointer' }} onClick={() => console.log('Eliminar', row.id)} />
        </div>
      </TableCell>
    </TableRow>
  );
};
export default HomeTable;
