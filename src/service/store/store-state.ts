import { Category } from "../../types/type.category.ts";
import { DeliveryMethod } from "../../types/type.delivery-method.ts";
import { CardSchema } from "../hooks/form/use-create-cart-form.ts";

export type StoreState = {
  dialogStep: number;
  setStep: (step: number) => void;
  resetDialog: () => void;

  categoryRef?: Category;
  setFormProps: (category: Category) => void;

  orderWeight: number;
  orderPriceEuro: number;
  orderDeliveryMethod?: DeliveryMethod;
  orderDeliveryPrice: number;

  cards: Card[];
  createCard: (card: Card) => void;
};

export type Card = CardSchema & {
  cardId: string;
  cardCount: number;

  categoryRef: Category;
};
