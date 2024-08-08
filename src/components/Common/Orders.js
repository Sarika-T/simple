import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {
  randomCreatedDate,
  randomTraderName,
  randomUpdatedDate,
} from '@mui/x-data-grid-generator';

export default function BasicRowEditingGrid() {
  return (
    <div style={{ height: 250, width: '100%' }}>
      <DataGrid editMode="row" rows={rows} columns={columns} />
    </div>
  );
}

const columns = [
  { field: 'customer', headerName: 'Customer', width: 200 },
  {
    field: 'orderNo',
    headerName: 'Order No.',
    type: 'number',
    align: 'left',
    headerAlign: 'left',
    width: 200
  },
  {
    field: 'amount',
    headerName: 'Amount',
    type: 'Number',
    width: 200,
  },
  {
    field: 'status',
    headerName: 'Status',
    type: 'status',
    width: 200,
  },
];

const rows = [
  {
    id: 1,
    customer: "Wade Warren",
    orderNo: 1578845,
    amount: "$124.00" ,
    status: "Delievered",
  },
  {
    id: 2,
    customer: "Jane Cooper",
    orderNo: 2568924,
    amount: "$565.00" ,
    status: "Delievered",
  },
  {
    id: 3,
    customer: "Guy Hawkins",
    orderNo: 9575635,
    amount: "$54.20" ,
    status: "Cancelled",
  },
  {
    id: 4,
    customer: "Kristin Watson",
    orderNo: 5399467,
    amount: "$300.00" ,
    status: "Pending",
  },
  {
    id: 5,
    customer: "Cody Fisher",
    orderNo: 3578916,
    amount: "$90.30" ,
    status: "Delievered",
  },
  {
    id: 6,
    customer: "Savannath Ngguyam",
    orderNo: 859246,
    amount: "$124.00" ,
    status: "Delievered",
  }
];
