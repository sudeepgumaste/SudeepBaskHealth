import { cn } from "@/utils/cn";
import React from "react";

import Image from "next/image";

const ResizeHandle = () => {
  return (
    <Image
      src="/assets/icons/resize-handle.svg"
      alt="resize-handle"
      width={24}
      height={24}
      draggable={false}
      className={cn(
        "resizeHandle | absolute right-0 bottom-0 w-6 h-6 |",
        "cursor-se-resize | text-foreground-secondary"
      )}
    ></Image>
  );
};

export default ResizeHandle;
