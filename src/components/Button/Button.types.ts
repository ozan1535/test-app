import { MouseEventHandler } from "react";

export interface IButton {
  type: "button" | "reset" | "submit" | undefined;
  isButtonSecondary: boolean;
  name: string;
  handleFunction: MouseEventHandler<HTMLButtonElement>;
  isButtonDisabled?: boolean;
}
