"use client";
import React, { useCallback, useState } from "react";
import { Layout, Responsive, WidthProvider } from "react-grid-layout";

import GridCell from "@/components/molecules/grid-cell";
import ResizeHandle from "@/components/atoms/resize-handle";

import useGridLayoutStore from "@/stores/grid-layout.store";

import useMediaQuery from "@/hooks/use-media-query";
import useUpdateSavedLayout from "@/hooks/use-update-local-storage";

import useGetLiveData from "@/queries/use-get-live-data";

import { widgetToTypeMapping } from "@/constants/default-layouts";

import { cn } from "@/utils/cn";
import { getRenderElementInCell } from "@/utils/get-render-element-in-cell";

import { LS_KEYS } from "@/constants/ls-keys";

import styles from "./styles.module.css";

const ResponsiveGridLayout = WidthProvider(Responsive);

const Dashboard = () => {
  // todo: add a loading state
  const { data, isLoading, isError } = useGetLiveData({
    enabled: !false,
    refetchInterval: 5000,
  });

  const { layout, setBreakpointLayout } = useGridLayoutStore();

  const [draggedItemId, setDraggedItemId] = useState<string | undefined>(
    undefined
  );

  // this is a fix to bypass the rgl bug where the update layout is called before breakpoint is set
  // it's 1281px because rgl uses max-width and takes into account the container width rather than the viewport width
  // lg breakpoint is 1000px + 80px (x-axis padding) + 200px sidebar
  const currentBreakpoint = useMediaQuery("(min-width: 1281px)") ? "lg" : "xxs";

  const handleLayoutChange = useCallback(
    (layout: Layout[]) => {
      if (!currentBreakpoint || layout.length === 0) return;
      setTimeout(() => {
        setBreakpointLayout(layout, currentBreakpoint);
      }, 100);
    },
    [currentBreakpoint, setBreakpointLayout]
  );

  useUpdateSavedLayout(LS_KEYS.LAYOUT, layout);

  if (isLoading)
    return (
      <div className="h-full w-full flex items-center justify-center">
        Loading...
      </div>
    );

  return (
    <>
      {isError && (
        <>
          <p
            className={cn(
              "fixed top-9 left-1/2 -translate-x-1/2 | bg-red-500 px-4 py-2 | text-white text-sm | rounded-lg",
              styles.errorMessage
            )}
          >
            We ran into issue fetching data. Please wait while we retry or
            reload the page.
          </p>
        </>
      )}

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
          <div className="opacity-0 group-hover/item:opacity-100 | z-30 relative">
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
          const dataKey = item.i;
          const { type, title } = widgetToTypeMapping[dataKey];
          const elementData = data.data.dashboardData[type][dataKey] || {};
          return (
            // rgl needs data-grid in the same file as the import to work
            <div
              id={dataKey}
              key={dataKey}
              data-grid={item}
              className={cn(styles.reactGridItem, "rounded-2xl| group/item")}
            >
              <GridCell title={title} isDragging={dataKey === draggedItemId}>
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
