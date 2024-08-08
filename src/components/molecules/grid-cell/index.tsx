import React from "react";

import { cn } from "@/utils/cn";

type Props = {
  children: React.ReactNode;
  isDragging?: boolean;
  title: string;
};

const GridCell: React.FC<Props> = ({ children, isDragging, title }) => {
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
          "draggable | p-4 | border-b border-primary | font-semibold text-sm | bg-layer-2 | cursor-grab",
          {
            ['cursor-grabbing']: isDragging,
          }
        )}
      >
        {title}
      </p>
      <div className="flex-1 | overflow-hidden">{children}</div>
    </div>
  );
};

export default GridCell;
