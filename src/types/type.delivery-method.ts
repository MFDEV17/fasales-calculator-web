import { Base } from "./type.base.ts";

export type DeliveryMethod = Base & {
  deliveryPriceRange: DeliveryPriceRange[];
  methodName: string;
};

export type DeliveryPriceRange = {
  commission: number;
  from: number;
  to: number;
};
