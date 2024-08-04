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
