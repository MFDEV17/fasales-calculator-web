import { Base } from "./type.base.ts";

export type Category = Base & {
  designWeight: number;
  image: string;
  name: string;
  mutableWeight: boolean;
  singleName?: string;
}