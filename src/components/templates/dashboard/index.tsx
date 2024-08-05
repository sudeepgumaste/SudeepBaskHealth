"use client";
import React, { useState } from "react";
import { Layout, Responsive, WidthProvider } from "react-grid-layout";

import useGetLiveData from "@/queries/use-get-live-data";

import GridCell from "@/components/molecules/grid-cell";

import ResizeHandle from "@/components/atoms/resize-handle";
import UserEngagement from "@/components/organisms/user-engagement";
import SalesOverTime from "@/components/organisms/sales-over-time";

import styles from "./styles.module.css";

import { cn } from "@/utils/cn";

const ResponsiveGridLayout = WidthProvider(Responsive);

const _layout: Layout[] = [
  { x: 0, y: 0, w: 4, h: 4, i: "1" },
  { x: 5, y: 0, w: 2, h: 4, i: "2" },
  { x: 0, y: 5, w: 3, h: 2, i: "3" },
  { x: 5, y: 5, w: 3, h: 2, i: "4" }
];

const Dashboard = () => {
  const { data, isLoading, isError, error } = useGetLiveData({
    enabled: !false,
    refetchInterval: Infinity,
  });

  const [layout, setLayout] = useState<Layout[]>(_layout);
  const [draggedItemId, setDraggedItemId] = useState<string | undefined>(undefined);

  console.log({ layout });

  return (
    <>
      <ResponsiveGridLayout
        cols={{
          lg: 6,
          md: 6,
          sm: 4,
          xs: 2,
          xxs: 2,
        }}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        className={cn("w-full h-full | relative", styles.reactGridLayout)}
        isDraggable={true}
        isResizable={true}
        draggableHandle=".draggable"
        rowHeight={80}
        onLayoutChange={(layout) => setLayout(layout)}
        resizeHandles={["se"]}
        resizeHandle={
          <div className="opacity-0 group-hover/item:opacity-100">
            <ResizeHandle />
          </div> 
        }
        margin={[24, 24]}
        containerPadding={[0,0]}
        compactType={"vertical"}
        useCSSTransforms={true}
        onDragStart={(_, item) => setDraggedItemId(item.i)}
        onDragStop={(id) => setDraggedItemId(undefined)}
      >
        {layout.map((item, index) => (
          // rgl needs data-grid in the same file as the import to work
          <div key={index} data-grid={item} className={cn(styles.reactGridItem, 'rounded-2xl| group/item')}>
            <GridCell title="Weekly user engagement" key={index} isDragging={item.i === draggedItemId}>
              {
                index === 0 ? data && (
                  <SalesOverTime salesOverTime={data?.data.dashboardData.charts.salesOverTime} />
                ): null
              }
              {
                index === 1 ? data && (
                  <UserEngagement userEngagement={data?.data.dashboardData.charts.userEngagement} />
                ): null
              }
            </GridCell>
          </div>
        ))}
      </ResponsiveGridLayout>
    </>
  );
};

export default Dashboard;
