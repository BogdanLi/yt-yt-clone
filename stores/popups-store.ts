import { createStore } from "zustand";

export type PopupsState = {
  mobileSidebar: boolean;
};

export type PopupsActions = {
  showMobileSidebar: () => void;
  closeMobileSidebar: () => void;
};

export type PopupsStore = PopupsState & PopupsActions;

export const deafultInitState: PopupsState = {
  mobileSidebar: false,
};

export const createPopupsStore = (
  initState: PopupsState = deafultInitState,
) => {
  return createStore<PopupsStore>()((set) => ({
    ...initState,
    showMobileSidebar: () => set(() => ({ mobileSidebar: true })),
    closeMobileSidebar: () => set(() => ({ mobileSidebar: false })),
  }));
};
