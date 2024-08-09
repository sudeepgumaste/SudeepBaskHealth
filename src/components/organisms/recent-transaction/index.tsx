import React, { useMemo } from "react";
import {
  createColumnHelper,
  SortingFn,
} from "@tanstack/react-table";
import dayjs from "dayjs";

import Table from "@/components/molecules/table";

import { TTransactionData } from "@/types/common.types";
import { formatCurrency } from "@/utils/format-currency";

const columnHelper = createColumnHelper<TTransactionData>();

const sortByAmount: SortingFn<TTransactionData> = (a, b) => {
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
    cell: (info) => dayjs(info.getValue()).format("MMM DD YYYY"),
  }),
];

type Props = {
  transactions: TTransactionData[];
};

const RecentTransaction: React.FC<Props> = ({ transactions }) => {
  const totalValue = useMemo(
    () =>
      formatCurrency(transactions.reduce((acc, curr) => acc + Number(curr.amount.slice(1)), 0)),
    [transactions]
  );

  return (
    <Table<TTransactionData>
      data={transactions}
      columns={columns}
      enableSorting={true}
      subText={
        <p className="text-xs opacity-40 | absolute bottom-2 left-8 right-0 | z-10">
          Total transaction value: {totalValue}
        </p>
      }
    />
  );
};

export default RecentTransaction;
