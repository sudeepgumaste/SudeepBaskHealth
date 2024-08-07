"use client";
import Switch from "@/components/atoms/switch";
import { LS_KEYS } from "@/constants/ls-keys";
import useUpdateLocalStorage from "@/hooks/use-update-local-storage";
import useGridLayoutStore from "@/stores/grid-layout.store";
import useWidgetsToggleStore from "@/stores/widgets-toggle.store";
import { TDataKey } from "@/types/common.types";
import React, { use } from "react";

const WIDGETS: {key: TDataKey, label: string}[] = [
  {
    key: "recentTransactions",
    label: "Recent Transactions",
  },
  {
    key: "salesOverTime",
    label: "Sales Over Time",
  },
  {
    key: "topProducts",
    label: "Top Products",
  },
  {
    key: "userEngagement",
    label: "User Engagement",
  },
];

const WidgetsToggle = () => {
  const { widgetsToggle, setWidgetsToggle } = useGridLayoutStore();

  useUpdateLocalStorage(LS_KEYS.TOGGLES, widgetsToggle);
  
  return (
    <section className="flex flex-col gap-4 | px-4 py-6 | text-left | border-t border-b border-primary">
      <p className="text-sm mb-3">Customize</p>
      {WIDGETS.map((widget) => (
        <Switch
          key={widget.key}
          checked={widgetsToggle[widget.key]}
          onCheckedChange={() =>
            setWidgetsToggle(widget.key, !widgetsToggle[widget.key])
          }
          label={widget.label}
          labelClassName="text-xs opacity-80"
        />
      ))}
    </section>
  );
};

export default WidgetsToggle;
