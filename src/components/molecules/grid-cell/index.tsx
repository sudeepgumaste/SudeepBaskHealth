import { cn } from "@/utils/cn";
import React from "react";

type Props = {
  children: React.ReactNode;
  isDragging?: boolean;
};

const GridCell: React.FC<Props> = ({ children, isDragging }) => {
  return (
    <div
      className={cn("border border-primary rounded-2xl | overflow-hidden | w-full h-full | relative | group",
        "bg-layer-1", {['shadow-lg']: isDragging}
      )} 
    >
      <div>{children}</div>
      <div
        className={cn("draggable | absolute bottom-2 left-1/2 -translate-x-1/2 | opacity-0 transition-opacity group-hover:opacity-100",
          "w-6 h-1 | bg-foreground-secondary | rounded-full | cursor-grab", {['cursor-grabbing']: isDragging}
        )}
      ></div>
    </div>
  );
};

export default GridCell;
