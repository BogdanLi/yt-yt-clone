"use client";

import { createPopupsStore, PopupsStore } from "@/stores/popups-store";
import { createContext, ReactNode, useContext, useRef } from "react";
import { useStore } from "zustand";

export type PopupsStoreApi = ReturnType<typeof createPopupsStore>;

export const PopupsStoreContext = createContext<PopupsStoreApi | undefined>(
  undefined,
);

export interface PopupsStoreProviderProps {
  children: ReactNode;
}

export const PopupsStoreProvider = ({ children }: PopupsStoreProviderProps) => {
  const storeRef = useRef<PopupsStoreApi>();

  if (!storeRef.current) {
    storeRef.current = createPopupsStore();
  }

  return (
    <PopupsStoreContext.Provider value={storeRef.current}>
      {children}
    </PopupsStoreContext.Provider>
  );
};

export const usePopupStore = <T,>(selector: (store: PopupsStore) => T): T => {
  const popupStoreContext = useContext(PopupsStoreContext);

  if (!popupStoreContext) {
    throw new Error(``);
  }

  return useStore(popupStoreContext, selector);
};
