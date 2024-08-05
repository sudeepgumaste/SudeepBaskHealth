import { Layout } from "react-grid-layout";

type MinMaxCellSizes = Pick<Layout, 'maxH' | 'maxW' | 'minH' | 'minW'>

export const salesOverTime:MinMaxCellSizes = {
  minW: 4,
  minH: 4,
  maxW: 6,
  maxH: 6,
}

export const userEngagement:MinMaxCellSizes = {
  minW: 1,
  minH: 3,
  maxW: 3,
  maxH: 6,
}

export const recentTransactions:MinMaxCellSizes = {
  minW: 2,
  minH: 3,
  maxW: 6,
  maxH: 8,
}

export const topProducts:MinMaxCellSizes = {
  minW: 2,
  minH: 3,
  maxW: 6,
  maxH: 8,
}