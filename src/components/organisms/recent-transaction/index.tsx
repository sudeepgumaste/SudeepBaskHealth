import React, { useState } from "react";
import {
  createColumnHelper,
  SortingFn,
  SortingState,
} from "@tanstack/react-table";
import dayjs from "dayjs";

import Table from "@/components/molecules/table";

import { TTransactionData } from "@/types/common.types";

const columnHelper = createColumnHelper<TTransactionData>();

const sortByAmount: SortingFn<TTransactionData> = (a, b) => {
  console.log({
    a: a.original.amount,
    b: b.original.amount,
  })
  const amountA = Number(a.original.amount.slice(1));
  const amountB = Number(b.original.amount.slice(1));
  return amountA - amountB;
};

const columns = [
  columnHelper.accessor("id", {
    header: "ID",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("user", {
    header: "Name",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("amount", {
    header: "Amount",
    cell: (info) => info.getValue(),
    sortingFn: sortByAmount,
    sortDescFirst: true,
  }),
  columnHelper.accessor("date", {
    header: "Date",
    cell: (info) => dayjs(info.getValue()).format("MM/DD/YYYY"),
  }),
];

type Props = {
  transactions: TTransactionData[];
};

const RecentTransaction: React.FC<Props> = ({ transactions }) => {

  return (
    <Table<TTransactionData>
      data={transactions}
      columns={columns}
      enableSorting={true}
    />
  );
};

export default RecentTransaction;
