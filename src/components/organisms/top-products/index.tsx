import React from 'react'
import { TProductData } from '@/types/common.types'
import { createColumnHelper } from '@tanstack/react-table';
import Table from '@/components/molecules/table';


const columnHelper = createColumnHelper<TProductData>();

const columns = [
  columnHelper.accessor('id', {
    header: 'ID',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('name', {
    header: 'Name',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('sales', {
    header: 'Sales',
    cell: (info) => info.getValue(),
  }),
];

type Props = {
  topProducts: TProductData[]
}

const TopProducts:React.FC<Props> = ({topProducts}) => {
  return (
    <Table<TProductData>
      data={topProducts}
      columns={columns}
    />
  )
}

export default TopProducts