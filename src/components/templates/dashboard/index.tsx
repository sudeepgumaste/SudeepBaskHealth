"use client";
import React, { useCallback, useState } from "react";
import { Layout, Responsive, WidthProvider } from "react-grid-layout";

import useGetLiveData from "@/queries/use-get-live-data";

import GridCell from "@/components/molecules/grid-cell";
import ResizeHandle from "@/components/atoms/resize-handle";

import { cn } from "@/utils/cn";

import {
  TBreakpointLayoutMap,
} from "@/types/common.types";

import styles from "./styles.module.css";
import useMediaQuery from "@/hooks/use-media-query";
import {
  defaultLayoutIdElementMapping,
  starterLayout,
} from "@/constants/default-layouts";
import { getRenderElementInCell } from "@/utils/get-render-element-in-cell";

const ResponsiveGridLayout = WidthProvider(Responsive);

const Dashboard = () => {
  const { data, isLoading, isError, error } = useGetLiveData({
    enabled: !false,
    refetchInterval: 5000,
  });

  const [layout, setLayout] = useState<TBreakpointLayoutMap>(starterLayout);
  const [draggedItemId, setDraggedItemId] = useState<string | undefined>(
    undefined
  );

  const currentBreakpoint = useMediaQuery("(min-width: 1281px)") ? "lg" : "xxs";
  const handleLayoutChange = useCallback(
    (layout: Layout[]) => {
      if (!currentBreakpoint || layout.length === 0) return;
      setTimeout(() => {
        setLayout((prevLayout) => ({
          ...prevLayout,
          [currentBreakpoint]: layout,
        }));
      }, 100);
    },
    [currentBreakpoint]
  );

  return (
    <>
      <ResponsiveGridLayout
        cols={{
          lg: 6,
          xxs: 2,
        }}
        // can add more breakpoints if needed
        breakpoints={{ lg: 1000, xxs: 0 }}
        className={cn("w-full h-full | relative", styles.reactGridLayout)}
        isDraggable={true}
        isResizable={true}
        draggableHandle=".draggable"
        rowHeight={80}
        onLayoutChange={handleLayoutChange}
        resizeHandles={["se"]}
        resizeHandle={
          <div className="opacity-0 group-hover/item:opacity-100">
            <ResizeHandle />
          </div>
        }
        margin={[24, 24]}
        containerPadding={[0, 0]}
        compactType={"vertical"}
        useCSSTransforms={true}
        onDragStart={(_, item) => setDraggedItemId(item.i)}
        onDragStop={() => setDraggedItemId(undefined)}
      >
        {layout[currentBreakpoint].map((item, index) => {
          if (!data) return null;
          const { type, dataKey } = defaultLayoutIdElementMapping[index];
          const elementData = data.data.dashboardData[type][dataKey] || {};
          return (
            // rgl needs data-grid in the same file as the import to work
            <div
              id={item.i}
              key={item.i}
              data-grid={item}
              className={cn(styles.reactGridItem, "rounded-2xl| group/item")}
            >
              <GridCell
                title="Weekly user engagement"
                isDragging={item.i === draggedItemId}
              >
                {getRenderElementInCell(dataKey, elementData)}
              </GridCell>
            </div>
          );
        })}
      </ResponsiveGridLayout>
    </>
  );
};

export default Dashboard;
