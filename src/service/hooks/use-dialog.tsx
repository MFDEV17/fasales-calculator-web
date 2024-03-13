import { useStep } from "./use-step.ts";
import { useMap } from "./use-map.ts";
import StepBannedItems from "../../components/dialog/step.banned-items.tsx";
import StepCategoryChoice from "../../components/dialog/step.category-choice.tsx";
import StepCreateCart from "../../components/dialog/step.create-cart.tsx";
import { JSX } from "react";

export const useDialog = () => {
  const [currentStep, helpers] = useStep(3);
  const { goToNextStep, goToPrevStep, reset } = helpers;

  const [map] = useMap<number, JSX.Element>([
    [1, <StepCategoryChoice />],
    [2, <StepCreateCart />],
    [3, <StepBannedItems />],
  ]);

  return {
    currentContent: map.get(currentStep),
    resetDialog: reset,
    goToPrevStep,
    goToNextStep,
  };
};
