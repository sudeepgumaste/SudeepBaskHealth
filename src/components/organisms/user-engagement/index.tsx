import React from "react";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

import { TChartData } from "@/types/common.types";

import useParseApiForCharts from "@/hooks/use-parse-api-for-charts";

import ChartTooltip from "@/components/atoms/chart-tooltip";

type Props = {
  userEngagement: TChartData;
};

const UserEngagement: React.FC<Props> = ({ userEngagement }) => {
  const mapData = useParseApiForCharts({
    data: userEngagement,
    labelName: "week",
  });

  return (
    <ResponsiveContainer width={'100%'} height={'100%'} className={'p-4'}>
      <BarChart accessibilityLayer data={mapData} maxBarSize={700} margin={{top: 16, right: 16, bottom: 16, left: 16}}>
        <CartesianGrid vertical={false} stroke="var(--border-primary" />
        <XAxis dataKey="week" tickLine={true} tickMargin={10}/>
        <Tooltip content={<ChartTooltip afterLabel="Users" />} cursor={false}/>
        <Bar dataKey="value" fill="var(--primary-accent-color)" radius={8}/>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default UserEngagement;
