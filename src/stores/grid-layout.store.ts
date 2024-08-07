import { create } from "zustand";

import { Layout } from "react-grid-layout";
import { TBreakpointLayoutMap } from "@/types/common.types";
import { starterLayout } from "@/constants/default-layouts";
import { LS_KEYS } from "@/constants/ls-keys";

type TGridLayoutStore = {
  layout: TBreakpointLayoutMap;
  setLayout: (layout: TBreakpointLayoutMap) => void;
  setBreakpointLayout: (layout: Layout[], breakPoint: 'lg' | 'xxs') => void;
};

const initLayout = () => {
  const savedLayout = localStorage.getItem(LS_KEYS.LAYOUT);
  if (savedLayout) {
    try {
      return JSON.parse(savedLayout);
    } catch (e) {
      console.error(e);
      return starterLayout;
    }
  }
  return starterLayout;
}

const useGridLayoutStore = create<TGridLayoutStore>()((set) => ({
  layout: initLayout(),
  setLayout: (layout: TBreakpointLayoutMap) => {
    set(() => ({
      layout,
    }));
  },
  setBreakpointLayout: (layout: Layout[], breakPoint: 'lg' | 'xxs') => {
    set((prevState) => ({
      layout: {
        ...prevState.layout,
        [breakPoint]: layout,
      },
    }));
  }
}));

export default useGridLayoutStore;
