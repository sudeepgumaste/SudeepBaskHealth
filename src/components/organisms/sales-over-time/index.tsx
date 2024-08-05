import React from "react";

import { TChartData } from "@/types/common.types";
import useParseApiForCharts from "@/hooks/use-parse-api-for-charts";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import ChartTooltip from "@/components/atoms/chart-tooltip";
import dayjs from "dayjs";

type Props = {
  salesOverTime: TChartData;
};

const SalesOverTime: React.FC<Props> = ({ salesOverTime }) => {
  const mappedData = useParseApiForCharts({
    data: salesOverTime,
    labelName: "date",
  });
  return (
    <ResponsiveContainer width={"100%"} height={"100%"} className={"p-4"}>
      <AreaChart
        accessibilityLayer
        data={mappedData}
        margin={{ top: 16, right: 16, bottom: 16, left: 16 }}
      >
        <CartesianGrid vertical={false} stroke="var(--border-primary)" />
        <XAxis
          dataKey="date"
          tickLine={true}
          tickCount={5}
          tickFormatter={(value) => dayjs(value).format("MMM DD")}
        />
        <YAxis
          dataKey="value"
          tickLine={true}
          tickCount={5}
          tickFormatter={(value) => `$${value.toLocaleString()}`}
        />
        <Tooltip
          content={
            <ChartTooltip
              afterLabel="Sales"
              labelFormatter={(value, _) => dayjs(value).format("MMM DD YYYY")}
            />
          }
          cursor={false}
        />
        <Area
          dataKey="value"
          fill="var(--primary-accent-color)"
          stroke="var(--primary-accent-color)"
          radius={8}
          type={"monotone"}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default SalesOverTime;
