import React, { useMemo, useState } from 'react'
import { TProductData } from '@/types/common.types'
import { createColumnHelper, SortingState } from '@tanstack/react-table';
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
  const [sorting, setSorting] = useState<SortingState>([]);

  const totalSales = useMemo(
    () =>
      topProducts.reduce((acc, curr) => acc + Number(curr.sales), 0),
    [topProducts]
  );

  return (
    <Table<TProductData>
      data={topProducts}
      columns={columns}
      state={{
        sorting,
      }}
      onSortingChange={setSorting}
      subText={
        <p className="text-xs opacity-40 | absolute bottom-2 left-8 right-0 | z-10">
          Total sales: {totalSales}
        </p>
      }
    />
  )
}

export default TopProducts