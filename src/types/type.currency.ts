import { Base } from "./type.base.ts";

export type Currency = Base & {
  currencyCode: string;
  currencyName: string;
}