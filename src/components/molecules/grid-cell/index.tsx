import React from "react";
import { useMediaQuery } from "usehooks-ts";
import { GripVertical } from "lucide-react";

import { cn } from "@/utils/cn";

type Props = {
  children: React.ReactNode;
  isDragging?: boolean;
  title: string;
};

const GridCell: React.FC<Props> = ({ children, isDragging, title }) => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  return (
    <div
      className={cn(
        "border border-primary rounded-2xl | overflow-hidden | w-full h-full | relative | group | transition-all",
        "bg-layer-1",
        { ["shadow-lg | rotate-2 scale-[102%]"]: isDragging },
        "flex flex-col"
      )}
    >
      <p
        className={cn(
          "p-4 | border-b border-primary | font-semibold text-sm | bg-layer-2 | cursor-grab | flex items-center justify-between",
          {
            ["cursor-grabbing"]: isDragging,
            ["draggable"]: isDesktop,
          }
        )}
      >
        {title}
        <span
          className={cn("lg:hidden inline-flex px-2 py-1", {
            ["draggable"]: !isDesktop,
          })}
        >
          <GripVertical size={16} className="opacity-50" />
        </span>
      </p>
      <div className="flex-1 | overflow-hidden">{children}</div>
    </div>
  );
};

export default GridCell;
