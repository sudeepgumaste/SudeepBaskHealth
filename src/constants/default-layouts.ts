import {
  TBreakpointLayoutMap,
  TCellType,
  TDataKey,
  TWidgetDefaultData,
  TWidgetsToggle,
} from "@/types/common.types";

export const salesOverTime: TWidgetDefaultData = {
  lg: {
    x: 0,
    y: 0,
    w: 4,
    h: 4,
    i: "salesOverTime",
    minW: 4,
    minH: 4,
    maxW: 6,
    maxH: 6,
  },
  xxs: {
    x: 0,
    y: 0,
    w: 2,
    h: 4,
    i: "salesOverTime",
    minW: 4,
    minH: 4,
    maxW: 6,
    maxH: 6,
  },
};

export const userEngagement: TWidgetDefaultData = {
  lg: {
    x: 0,
    y: 0,
    w: 2,
    h: 4,
    i: "userEngagement",
    minW: 1,
    minH: 3,
    maxW: 3,
    maxH: 6,
  },
  xxs: {
    x: 0,
    y: 0,
    w: 2,
    h: 4,
    i: "userEngagement",
    minW: 1,
    minH: 3,
    maxW: 3,
    maxH: 6,
  },
};

export const recentTransactions: TWidgetDefaultData = {
  lg: {
    x: 0,
    y: 0,
    w: 3,
    h: 4,
    i: "recentTransactions",
    minW: 2,
    minH: 3,
    maxW: 6,
    maxH: 8,
  },
  xxs: {
    x: 0,
    y: 0,
    w: 2,
    h: 4,
    i: "recentTransactions",
    minW: 2,
    minH: 3,
    maxW: 6,
    maxH: 8,
  },
};

export const topProducts: TWidgetDefaultData = {
  lg: {
    x: 0,
    y: 0,
    w: 3,
    h: 4,
    i: "topProducts",
    minW: 2,
    minH: 3,
    maxW: 6,
    maxH: 8,
  },
  xxs: {
    x: 0,
    y: 0,
    w: 2,
    h: 4,
    i: "topProducts",
    minW: 2,
    minH: 3,
    maxW: 6,
    maxH: 8,
  },
};

export const widgetDictionary: Record<TDataKey, TWidgetDefaultData> = {
  salesOverTime,
  userEngagement,
  recentTransactions,
  topProducts,
};

export const starterLayout: TBreakpointLayoutMap = {
  lg: [
    salesOverTime["lg"],
    userEngagement["lg"],
    recentTransactions["lg"],
    topProducts["lg"],
  ],
  xxs: [
    salesOverTime["xxs"],
    userEngagement["xxs"],
    recentTransactions["xxs"],
    topProducts["xxs"],
  ],
};

export const starterWidgetsToggle: TWidgetsToggle = {
  recentTransactions: true,
  salesOverTime: true,
  topProducts: true,
  userEngagement: true,
};

type LayoutElementMapping = {
  type: TCellType;
  title: string;
};

export const widgetToTypeMapping: Record<
  TDataKey,
  LayoutElementMapping
> = {
  salesOverTime: {
    type: "charts",
    title: "Sales over time",
  },
  userEngagement: {
    type: "charts",
    title: "User engagement",
  },
  recentTransactions: {
    type: "tables",
    title: "Recent transactions",
  },
  topProducts: {
    type: "tables",
    title: "Top products",
  },
};
