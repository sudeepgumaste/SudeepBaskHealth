import { create } from "zustand";

import { Layout } from "react-grid-layout";
import {
  TBreakpointLayoutMap,
  TDataKey,
  TWidgetsToggle,
} from "@/types/common.types";
import {
  starterLayout,
  starterWidgetsToggle,
  widgetDictionary,
} from "@/constants/default-layouts";
import { LS_KEYS } from "@/constants/ls-keys";

type TGridLayoutStore = {
  widgetsToggle: TWidgetsToggle;
  layout: TBreakpointLayoutMap;
  setWidgetsToggle: (elementType: TDataKey, toggle: boolean) => void;
  initWidgetsToggle: (toggles: TWidgetsToggle) => void;
  setLayout: (layout: TBreakpointLayoutMap) => void;
  setBreakpointLayout: (layout: Layout[], breakPoint: "lg" | "xxs") => void;
};

const removeWidgetsFromLayout = (
  layout: TBreakpointLayoutMap,
  widget: TDataKey[]
) => {
  const lgLayout = layout.lg.filter((item) => !widget.includes(item.i));
  const xxsLayout = layout.xxs.filter((item) => !widget.includes(item.i));
  return {
    lg: lgLayout,
    xxs: xxsLayout,
  };
};

const addWidgetToLayout = (layout: TBreakpointLayoutMap, widget: TDataKey) => {
  const lgWidgetData = widgetDictionary[widget].lg;
  const xxsWidgetData = widgetDictionary[widget].xxs;
  const lgLayout = layout.lg.concat(lgWidgetData);
  const xxsLayout = layout.xxs.concat(xxsWidgetData);
  return {
    lg: lgLayout,
    xxs: xxsLayout,
  };
};

const initLayout = () => {
  if (typeof window === 'undefined') return starterLayout;
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
};


const useGridLayoutStore = create<TGridLayoutStore>()((set) => ({
  widgetsToggle: starterWidgetsToggle,
  layout: initLayout(),
  setLayout: (layout: TBreakpointLayoutMap) => {
    set(() => ({
      layout,
    }));
  },
  setBreakpointLayout: (layout: Layout[], breakPoint: "lg" | "xxs") => {
    set((prevState) => ({
      layout: {
        ...prevState.layout,
        [breakPoint]: layout,
      },
    }));
  },
  initWidgetsToggle: (toggles) => {
    set(() => ({
      widgetsToggle: toggles,
    }));
  },
  setWidgetsToggle: (elementType, toggle) => {
    set((prevState) => {
      const newLayout = toggle
        ? addWidgetToLayout(prevState.layout, elementType)
        : removeWidgetsFromLayout(prevState.layout, [elementType]);
      return {
        layout: newLayout,
        widgetsToggle: {
          ...prevState.widgetsToggle,
          [elementType]: toggle,
        },
      };
    });
  },
}));

export default useGridLayoutStore;
