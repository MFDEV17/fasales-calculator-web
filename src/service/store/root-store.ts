import { create } from "zustand";
import { StoreState } from "./store-state.ts";

export const rootStore = create<StoreState>()((set) => ({
  dialogStep: 1,
  setStep: (set) => {},
}));
