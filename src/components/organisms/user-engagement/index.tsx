import React, { useMemo, useState } from "react";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Label,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { TChartData } from "@/types/common.types";

import useParseApiForCharts from "@/hooks/use-parse-api-for-charts";

import ChartTooltip from "@/components/atoms/chart-tooltip";
import { ChartBarIcon, ChartPie, ChartPieIcon } from "lucide-react";
import { cn } from "@/utils/cn";

type Props = {
  userEngagement: TChartData;
};

const UserEngagement: React.FC<Props> = ({ userEngagement }) => {
  const [chartType, setChartType] = useState<"bar" | "pie">("bar");

  const mappedData = useParseApiForCharts({
    data: userEngagement,
    labelName: "week",
  });

  const maxUsersWeek = useMemo(() => {
    const _maxUsersWeek = mappedData.reduce((prev, current) => {
      return prev.value > current.value ? prev : current;
    });
    return {
      value: _maxUsersWeek.value,
      week: _maxUsersWeek.week,
    };
  }, [mappedData]);

  const totalUsers = useMemo(() => {
    const _totalUsers = userEngagement.data.reduce((prev, current) => {
      return prev + current;
    }, 0);
    return _totalUsers;
  }, [mappedData]);

  return (
    <div className="flex flex-col | h-full">
      <div className="flex pt-3">
        <p className="text-xs lg:text-sm | max-w-[190px] lg:max-w-[unset] | px-4 | opacity-50">
          {maxUsersWeek.week} had the most users ({maxUsersWeek.value})
        </p>
        <div className="ml-auto mr-4">
          <button
            onClick={() => setChartType("bar")}
            className={cn(
              "bg-layer-2 | p-2 | rounded-l-md | border border-r-0 border-primary",
              { ["bg-primary-accent text-white border-primary-accent"]: chartType === "bar" }
            )}
          >
            <ChartBarIcon size={16} />
          </button>
          <button
            onClick={() => setChartType("pie")}
            className={cn(
              "bg-layer-2 | p-2 | rounded-r-md | border border-l-0 border-primary",
              { ["bg-primary-accent text-white border-primary-accent"]: chartType === "pie" }
            )}
          >
            <ChartPieIcon size={16} />
          </button>
        </div>
      </div>

      {chartType === "bar" ? (
        <EngagementBarChart mappedData={mappedData} />
      ) : (
        <EngagementPieChart mappedData={mappedData} totalUsers={totalUsers} />
      )}
      {chartType === "bar" && (
        <p className="text-xs opacity-40 font-light | pb-4 px-4 text-center">
          {totalUsers} users have engaged with the app
        </p>
      )}
    </div>
  );
};

export default UserEngagement;

type ChartProps = {
  mappedData: {
    [x: string]: string | number;
    value: number;
  }[];
};

const EngagementBarChart: React.FC<ChartProps> = ({ mappedData }) => {
  return (
    <ResponsiveContainer
      width={"100%"}
      height={"80%"}
      className={"p-4 mt-auto"}
    >
      <BarChart accessibilityLayer data={mappedData}>
        <CartesianGrid vertical={false} stroke="var(--border-primary" />
        <YAxis
          domain={[0, 600]}
          hide={true}
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tick={{
            fontSize: 12,
          }}
        />
        <XAxis
          dataKey="week"
          tickLine={false}
          axisLine={false}
          minTickGap={8}
          tickMargin={8}
          tick={{
            fontSize: 12,
          }}
        />
        <Tooltip content={<ChartTooltip afterLabel="Users" />} cursor={false} />
        <Bar
          dataKey="value"
          fill="var(--primary-accent-color)"
          fillOpacity={0.8}
          activeBar={{ fill: "var(--primary-accent-color)", fillOpacity: 1 }}
          radius={[8, 8, 0, 0]}
          barSize={44}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

const EngagementPieChart: React.FC<ChartProps & { totalUsers: number }> = ({
  mappedData,
  totalUsers,
}) => {
  return (
    <ResponsiveContainer
      width={"100%"}
      height={"80%"}
      className={"p-4"}
    >
      <PieChart data={mappedData}>
        <Pie
          data={mappedData}
          dataKey="value"
          nameKey="week"
          outerRadius={110}
          innerRadius={60}
          fill="var(--primary-accent-color)"
          stroke={"var(--background-layer-1)"}
        >
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    <tspan
                      x={viewBox.cx}
                      y={viewBox.cy}
                      className="text-primary text-3xl font-bold"
                      fill="var(--foreground-color-primary)"
                    >
                      {totalUsers}
                    </tspan>
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) + 24}
                      className="text-primary"
                      fill="var(--foreground-color-secondary)"
                    >
                      Users
                    </tspan>
                  </text>
                );
              }
            }}
          />
        </Pie>
        <Tooltip content={<ChartTooltip afterLabel="Users" />} cursor={false} />
      </PieChart>
    </ResponsiveContainer>
  );
};
