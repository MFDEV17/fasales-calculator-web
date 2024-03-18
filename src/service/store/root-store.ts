import { create } from "zustand";
import { StoreState } from "./store-state.ts";
import { immer } from "zustand/middleware/immer";

export const useRootStore = create<StoreState>()(
  immer((set) => ({
    dialogStep: 1,
    setStep: (step) =>
      set((state) => {
        state.dialogStep = step;
      }),
    resetDialog: () => {},
    setFormProps: (category) =>
      set((state) => {
        state.categoryRef = category;
      }),
    createCard: (card) =>
      set((state) => {
        state.cards.push(card);
      }),
    orderWeight: 0,
    orderPriceEuro: 0,
    orderDeliveryPrice: 0,
    cards: [],
  })),
);
