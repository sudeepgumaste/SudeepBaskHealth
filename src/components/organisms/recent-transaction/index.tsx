import React from "react";
import {
  createColumnHelper,
} from "@tanstack/react-table";
import dayjs from "dayjs";

import Table from "@/components/molecules/table";

import { TTransactionData } from "@/types/common.types";

const columnHelper = createColumnHelper<TTransactionData>();

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
    />
  );
};

export default RecentTransaction;
