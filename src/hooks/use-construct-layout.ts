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

const useConstructLayout = () => {
  const [layout, setLayout] = useState<TBreakpointLayoutMap>(getLayoutFromLocalStorage() || {});
}

export default useConstructLayout;