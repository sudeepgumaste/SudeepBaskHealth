import RecentTransaction from "@/components/organisms/recent-transaction";
import SalesOverTime from "@/components/organisms/sales-over-time";
import TopProducts from "@/components/organisms/top-products";
import UserEngagement from "@/components/organisms/user-engagement";

import {
  TChartData,
  TDataKey,
  TLocationData,
  TProductData,
  TTransactionData,
} from "@/types/common.types";

export const getRenderElementInCell = (
  dataKey: TDataKey,
  dataProp: TChartData | TLocationData | TProductData[] | TTransactionData[]
) => {
  switch (dataKey) {
    case "salesOverTime":
      return <SalesOverTime salesOverTime={dataProp as TChartData} />;

    case "userEngagement":
      return <UserEngagement userEngagement={dataProp as TChartData} />;

    case "recentTransactions":
      return <RecentTransaction transactions={dataProp as TTransactionData[]} />;

    case "topProducts":
      return <TopProducts topProducts={dataProp as TProductData[]} />;

    default:
      return null;
  }
};
