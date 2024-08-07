"use client";
import Switch from "@/components/atoms/switch";
import useWidgetsToggleStore from "@/stores/widgets-toggle.store";
import React from "react";

const WidgetsToggle = () => {
  const {
    recentTransactions,
    salesOverTime,
    topProducts,
    userEngagement,
    setRecentTransactions,
    setSalesOverTime,
    setTopProducts,
    setUserEngagement,
  } = useWidgetsToggleStore();

  return (
    <section className="flex flex-col gap-4 | px-4 py-6 | text-left | border-t border-b border-primary">
      <p className="text-sm mb-3">Customize</p>
      <Switch
        checked={recentTransactions}
        onCheckedChange={() => setRecentTransactions(!recentTransactions)}
        label="Recent Transactions"
        labelClassName="text-xs opacity-80"
      />
      <Switch
        checked={salesOverTime}
        onCheckedChange={() => setSalesOverTime(!salesOverTime)}
        label="Sales Over Time"
        labelClassName="text-xs opacity-80"
      />
      <Switch
        checked={topProducts}
        onCheckedChange={() => setTopProducts(!topProducts)}
        label="Top Products"
        labelClassName="text-xs opacity-80"
      />
      <Switch
        checked={userEngagement}
        onCheckedChange={() => setUserEngagement(!userEngagement)}
        label="User Engagement"
        labelClassName="text-xs opacity-80"
      />
    </section>
  );
};

export default WidgetsToggle;
