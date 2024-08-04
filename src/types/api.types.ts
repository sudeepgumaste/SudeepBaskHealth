import { TChartData, TLocationData, TProductData, TTransactionData } from "./common.types";

export type TApiResponse<T = unknown> = {
  success: true;
  data: T;
}

export type TApiError = Error

export type TApiCallReturnType<T = unknown> = [TApiResponse<T> | null, TApiError | null];

export type TLiveData = {
  dashboardData: {
    charts: {
      salesOverTime: TChartData;
      userEngagement: TChartData;
    },
    tables: {
      recentTransactions: TTransactionData[];
      topProducts: TProductData[];
    }
    map: {
      locations: TLocationData[];
    }
  }
}