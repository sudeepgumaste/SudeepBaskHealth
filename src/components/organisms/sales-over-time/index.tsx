import React, { useMemo } from "react";
import dayjs from "dayjs";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import ChartTooltip from "@/components/atoms/chart-tooltip";

import useParseApiForCharts from "@/hooks/use-parse-api-for-charts";
import { formatCurrency } from "@/utils/format-currency";

import { TChartData } from "@/types/common.types";

type Props = {
  salesOverTime: TChartData;
};

const SalesOverTime: React.FC<Props> = ({ salesOverTime }) => {
  const mappedData = useParseApiForCharts({
    data: salesOverTime,
    labelName: "date",
  });

  const totalSales = useMemo(
    () =>
      formatCurrency(salesOverTime.data.reduce((acc, curr) => acc + curr, 0)),
    [salesOverTime.data]
  );
  const highestSale = useMemo(() => {
    const _highestSale = mappedData.reduce(
      (acc, curr) => {
        if (acc.value < curr.value) {
          return curr;
        }
        return acc;
      },
      { value: 0 }
    );
    return {
      date: dayjs(_highestSale.date).format("MMM DD YYYY"),
      value: formatCurrency(_highestSale.value),
    };
  }, [mappedData]);

  return (
    <div className={"flex flex-col h-full | pb-4"}>
      <div className="flex pt-3">
        <div className="px-4">
          <p className="text-sm opacity-50">Total Sales</p>
          <p className="text-2xl font-bold">{totalSales}</p>
        </div>
        <p className="text-xs lg:text-sm text-right | max-w-[200px] lg:max-w-[unset] | ml-auto px-4 | opacity-50">
          Your highest sales were on {highestSale.date} valued at {highestSale.value}
        </p>
      </div>
      <ResponsiveContainer width={"100%"} height={"80%"} className={"mt-auto"}>
        <AreaChart accessibilityLayer data={mappedData} maxBarSize={220}>
          <YAxis
            domain={[0, 250]}
            tickLine={false}
            axisLine={false}
            tickMargin={0}
            hide={true}
          />
          <XAxis
            dataKey="date"
            tickLine={false}
            axisLine={false}
            minTickGap={8}
            tickMargin={8}
            tick={{
              fontSize: 12,
            }}
            tickFormatter={(value, index) =>
              index % 4 === 0 ? dayjs(value).format("MMM DD") : ""
            }
          />
          <Tooltip
            content={
              <ChartTooltip
                valueFormatter={(value) =>
                  new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  }).format(value as number)
                }
                labelFormatter={(value, _) =>
                  dayjs(value).format("MMM DD YYYY")
                }
              />
            }
            cursor={false}
          />
          <defs>
            <linearGradient id="fillSalesOverTime" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="var(--primary-500)"
                stopOpacity={1}
              />
              <stop
                offset="95%"
                stopColor="var(--primary-500)"
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <Area
            dataKey="value"
            fill="url(#fillSalesOverTime)"
            stroke="var(--primary-500)"
            strokeWidth={2}
            radius={8}
            type={"natural"}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesOverTime;
