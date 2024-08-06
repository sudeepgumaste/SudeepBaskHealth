import {
  TCellType,
  TChartData,
  TDataKey,
  TLocationData,
  TProductData,
  TTransactionData,
} from "./common.types";

export type TApiResponse<T = unknown> = {
  success: true;
  data: T;
};

export type TApiError = Error;

export type TApiCallReturnType<T = unknown> = [
  TApiResponse<T> | null,
  TApiError | null
];

export type TLiveData = {
  dashboardData: Record<
    TCellType,
    Record<
      TDataKey,
      TChartData | TLocationData | TProductData[] | TTransactionData[]
    >
  >;
};
