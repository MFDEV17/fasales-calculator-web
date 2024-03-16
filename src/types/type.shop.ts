import { Base } from "./type.base.ts";

export type Shop = Base & {
  shopName: string;
  deliveryPrice: number;
  shopUrl: string;
  specialCommission: number;
  specialCommissionActive: boolean;
};
