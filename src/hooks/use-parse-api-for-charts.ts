import { TChartData } from "@/types/common.types";
import { useMemo } from "react";

type Params = {
  data: TChartData,
  labelName: string;
}

const useParseApiForCharts = ({
  data,
  labelName
}: Params) => {
  const parsedData = useMemo(() => {
    return data.labels.map((item: string, index: number) => {
      return {
        [labelName]: item,
        value: data.data[index],
      };
    });
  }, [data, labelName]);

  return parsedData;
}

export default useParseApiForCharts;