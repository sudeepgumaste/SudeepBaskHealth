import {
  TBreakpointLayoutMap,
  TCellType,
  TDataKey,
} from "@/types/common.types";

export const salesOverTime = {
  lg: {
    x: 0,
    y: 0,
    w: 4,
    h: 4,
    i: "charts | salesOverTime",
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
    i: "charts | salesOverTime",
    minW: 4,
    minH: 4,
    maxW: 6,
    maxH: 6,
  },
}

export const userEngagement = {
  lg: {
    x: 5,
    y: 0,
    w: 2,
    h: 4,
    i: "charts | userEngagement",
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
    i: "charts | userEngagement",
    minW: 1,
    minH: 3,
    maxW: 3,
    maxH: 6,
  },
}

export const recentTransactions = {
  lg: {
    x: 0,
    y: 5,
    w: 3,
    h: 4,
    i: "tables | recentTransactions",
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
    i: "tables | recentTransactions",
    minW: 2,
    minH: 3,
    maxW: 6,
    maxH: 8,
  },
}

export const topProducts = {
  lg: {
    x: 5,
    y: 5,
    w: 3,
    h: 4,
    i: "tables | topProducts",
    minW: 2,
    minH: 3,
    maxW: 6,
    maxH: 8,
  },
  xxs: {
    x: 0,
    y: 12,
    w: 2,
    h: 4,
    i: "tables | topProducts",
    minW: 2,
    minH: 3,
    maxW: 6,
    maxH: 8,
  },
}


export const starterLayout: TBreakpointLayoutMap = {
  lg: [
    salesOverTime['lg'],
    userEngagement['lg'],
    recentTransactions['lg'],
    topProducts['lg'],
  ],
  xxs: [
    salesOverTime['xxs'],
    userEngagement['xxs'],
    recentTransactions['xxs'],
    topProducts['xxs'],
  ],
};

type LayoutElementMapping = {
  type: TCellType;
  dataKey: TDataKey;
  title: string;
};
// index is the id ref in the layout array
// explanation: 0th element data in Layout array will be housing
// 0th indexed dataPoint in the data array which would fetches data
// from api response as dashboardData['charts']['salesOverTime']
export const defaultLayoutIdElementMapping: LayoutElementMapping[] = [
  {
    type: "charts",
    dataKey: "salesOverTime",
    title: "Sales over time",
  },
  {
    type: "charts",
    dataKey: "userEngagement",
    title: "User engagement",
  },
  {
    type: "tables",
    dataKey: "recentTransactions",
    title: "Recent transactions",
  },
  {
    type: "tables",
    dataKey: "topProducts",
    title: "Top products",
  },
];
