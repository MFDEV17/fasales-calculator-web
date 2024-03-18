import { useStep } from "./use-step.ts";
import { useMap } from "./use-map.ts";
import DialogBannedItems from "../../components/dialog/dialog.banned-items.tsx";
import StepCategoryChoice from "../../components/dialog/step.category-choice.tsx";
import StepCreateCart from "../../components/dialog/step.create-cart.tsx";
import { JSX } from "react";

export type DialogProps = {
  goToNextStep: () => void;
  goToPrevStep: () => void;
  reset: () => void;
  setStep?: (step: number) => void;
};

export const useDialog = () => {
  const [currentStep, helpers] = useStep(3);
  const { goToNextStep, goToPrevStep, reset, setStep } = helpers;

  const [map] = useMap<number, JSX.Element>([
    [
      1,
      <StepCategoryChoice
        goToNextStep={goToNextStep}
        goToPrevStep={goToPrevStep}
        reset={reset}
      />,
    ],
    [
      2,
      <StepCreateCart
        goToNextStep={goToNextStep}
        goToPrevStep={goToPrevStep}
        reset={reset}
      />,
    ],
    [
      3,
      <DialogBannedItems
        goToNextStep={goToNextStep}
        goToPrevStep={goToPrevStep}
        reset={reset}
        setStep={setStep}
      />,
    ],
  ]);

  return {
    currentContent: map.get(currentStep),
    goToPrevStep,
    goToNextStep,
    reset,
    currentStep,
  };
};
