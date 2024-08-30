import { createStore } from "zustand";

export type PopupsState = {
  mobileSidebar: boolean;
  modal: boolean;
};

export type PopupsActions = {
  showMobileSidebar: () => void;
  closeMobileSidebar: () => void;
  showModal: () => void;
  closeModal: () => void;
};

export type PopupsStore = PopupsState & PopupsActions;

export const deafultInitState: PopupsState = {
  mobileSidebar: false,
  modal: false,
};

export const createPopupsStore = (
  initState: PopupsState = deafultInitState,
) => {
  return createStore<PopupsStore>()((set) => ({
    ...initState,
    showMobileSidebar: () => set(() => ({ mobileSidebar: true })),
    closeMobileSidebar: () => set(() => ({ mobileSidebar: false })),
    showModal: () => set(() => ({ modal: true })),
    closeModal: () => set(() => ({ modal: false })),
  }));
};
