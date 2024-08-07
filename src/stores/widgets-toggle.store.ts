import { create } from "zustand";

type WidgetsToggleStore = {
  recentTransactions: boolean;
  salesOverTime: boolean;
  topProducts: boolean;
  userEngagement: boolean;
};

type WidgetsToggleActions = {
  setRecentTransactions: (value: boolean) => void;
  setSalesOverTime: (value: boolean) => void;
  setTopProducts: (value: boolean) => void;
  setUserEngagement: (value: boolean) => void;
};

type StoreState = WidgetsToggleStore & WidgetsToggleActions;

const useWidgetsToggleStore = create<StoreState>()((set) => ({
  recentTransactions: true,
  salesOverTime: true,
  topProducts: true,
  userEngagement: true,
  setRecentTransactions: (value) => set({ recentTransactions: value }),
  setSalesOverTime: (value) => set({ salesOverTime: value }),
  setTopProducts: (value) => set({ topProducts: value }),
  setUserEngagement: (value) => set({ userEngagement: value }),
}));

export default useWidgetsToggleStore;
