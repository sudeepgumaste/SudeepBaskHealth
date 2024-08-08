import { create } from "zustand";

interface IGlobalStore {
  sideBarShown: boolean;
  setSidebarShown: (value: boolean) => void;
  toggleSidebar: () => void;
}

export const useGlobalStore = create<IGlobalStore>((set) => ({
  sideBarShown: false,
  setSidebarShown: (value) => set({ sideBarShown: value }),
  toggleSidebar: () =>
    set((prevState) => ({
      ...prevState,
      sideBarShown: !prevState.sideBarShown,
    })),
}));
