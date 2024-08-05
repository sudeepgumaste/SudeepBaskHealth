import React from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { cn } from "@/utils/cn";

type Props<TData> = {
  data: TData[];
  columns: ColumnDef<TData, any>[];
};

const Table = <TData,>({ data, columns }: Props<TData>) => {
  const table = useReactTable<TData>({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="relative h-full">
      <div className="px-8 pb-6 h-full | overflow-y-auto | bg-layer-1">
        <table className="border-collapse table-auto | w-full h-full |overflow-y-auto | text-sm | text-left">
          <thead
            className={cn(
              "w-full | sticky top-0 z-10 pt-5 | bg-layer-1",
              "before:content-[''] before:absolute before:w-full before:h-px before:bg-border-primary before:bottom-0 before:left-0 before:right-0"
            )}
          >
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="px-4 py-4">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="text-sm font-light">
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className="border-b last:border-b-0 border-primary | hover:bg-layer-2 "
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-4 py-2">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* mask for when there is overflow and scroll appears. For user indication that there is more data */}
      <div
        className={cn(
          "absolute bottom-0 left-0 right-0 h-10 | z-10  | pointer-events-none |",
          "bg-gradient-to-t from-background-layer-1 from-20% to-[rgba(0,0,0,0)]"
        )}
      ></div>
    </div>
  );
};

export default Table;
