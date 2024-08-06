import { useState } from "react";

import { LS_KEYS } from "@/constants/ls-keys";

import { TBreakpointLayoutMap } from "@/types/common.types";

const getLayoutFromLocalStorage = () => {
  const layout = localStorage.getItem(LS_KEYS.LAYOUT);
  if (layout) {
    try {
      return JSON.parse(layout);
    } catch (error) {
      console.error("Error parsing layout from local storage:", error);
      return null;
    }
  }
  return null;
};

const defaultLayout: TBreakpointLayoutMap = {
  lg: [
    { x: 0, y: 0, w: 4, h: 4, i: "1" },
    { x: 5, y: 0, w: 2, h: 4, i: "2" },
    { x: 0, y: 5, w: 3, h: 4, i: "3" },
    { x: 5, y: 5, w: 3, h: 4, i: "4" },
  ],
  xxs: [
    { x: 0, y: 0, w: 2, h: 4, i: "1" },
    { x: 0, y: 5, w: 2, h: 4, i: "2" },
    { x: 0, y: 10, w: 2, h: 4, i: "3" },
    { x: 0, y: 15, w: 2, h: 4, i: "4" },
  ],
};

const useConstructLayout = () => {
  const [layout, setLayout] = useState<TBreakpointLayoutMap>(getLayoutFromLocalStorage() || {});
}

export default useConstructLayout;