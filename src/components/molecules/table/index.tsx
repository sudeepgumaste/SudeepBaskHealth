import React, { useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  TableOptions,
  useReactTable,
} from "@tanstack/react-table";
import { cn } from "@/utils/cn";
import { ArrowDownNarrowWide, ArrowUpNarrowWide } from "lucide-react";
import { motion } from "framer-motion";

type Props<TData> = Omit<TableOptions<TData>, "getCoreRowModel">;

const Table = <TData,>(tableOptions: Props<TData>) => {
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable<TData>({
    ...tableOptions,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    enableSorting: true,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
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
                    {header.isPlaceholder ? null : (
                      <div
                        className={cn("flex items-center gap-2", {
                          ["cursor-pointer select-none"]:
                            header.column.getCanSort(),
                        })}
                        onClick={header.column.getToggleSortingHandler()}
                        title={
                          header.column.getCanSort()
                            ? header.column.getNextSortingOrder() === "asc"
                              ? "Sort ascending"
                              : header.column.getNextSortingOrder() === "desc"
                              ? "Sort descending"
                              : "Clear sort"
                            : undefined
                        }
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: <ArrowDownNarrowWide size={14} />,
                          desc: <ArrowUpNarrowWide size={14} />,
                        }[header.column.getIsSorted() as string] ?? (
                          <span className="min-w-[14px]" />
                        )}
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="text-sm font-light">
            {table.getRowModel().rows.map((row) => (
              <motion.tr
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                key={row.id}
                className="border-b last:border-b-0 border-primary | hover:bg-layer-2 "
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-4 py-2 | text-nowrap">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </motion.tr>
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
