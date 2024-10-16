import { Layout } from "react-grid-layout";

export type TChartData = {
  labels: string[];
  data: number[];
};

export type TTransactionData = {
  id: number;
  user: string;
  amount: string;
  date: string;
}

export type TProductData = {
  id: string;
  name: string;
  sales: number;
}

export type TLocationData = {
  latitude: number;
  longitude: number;
  label: string;
  activity: number;
}

export type TBreakpoints = 'lg' | 'xxs'; 

export type TLayout = Layout & { i: TDataKey };

export type TBreakpointLayoutMap = Record<TBreakpoints, TLayout[]>;

export type TCellType = 'charts' | 'tables';

export type TDataKey = 'salesOverTime' | 'userEngagement' | 'recentTransactions' | 'topProducts';

export type TWidgetDefaultData = Record<TBreakpoints, TLayout>;

export type TWidgetsToggle = Record<TDataKey, boolean>;