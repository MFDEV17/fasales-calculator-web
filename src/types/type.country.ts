import { Base } from "./type.base.ts";

export type Country = Base & {
  countryCode: string;
  countryName: string;
}