import { create } from "zustand";
import { StoreState } from "./store-state.ts";

export const rootStore = create<StoreState>()(() => ({
  dialogStep: 1,
  setStep: () => {},
}));
