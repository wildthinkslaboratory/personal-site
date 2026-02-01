declare module "react-scrollama" {
  import * as React from "react";

  export interface ScrollamaProps {
    children: React.ReactNode;
    offset?: number;
    onStepEnter?: (args: {
      data: any;
      element: HTMLElement;
      index: number;
      direction: "up" | "down";
    }) => void;
    onStepExit?: (args: {
      data: any;
      element: HTMLElement;
      index: number;
      direction: "up" | "down";
    }) => void;
    onStepProgress?: (args: {
      data: any;
      element: HTMLElement;
      index: number;
      progress: number;
    }) => void;
    debug?: boolean;
  }

  export const Scrollama: React.FC<ScrollamaProps>;

  export interface StepProps {
    children: React.ReactNode;
    data?: any;
  }

  export const Step: React.FC<StepProps>;
}
