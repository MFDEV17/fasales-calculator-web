import * as React from "react";

export type StoreState = {
  dialogContent?: React.ReactElement;
  dialogStep: number;
  setStep: (step: number) => void;
};
