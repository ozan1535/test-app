import { ChangeEventHandler } from "react";

export interface IInput {
  name: string;
  type: string;
  handleFunction: ChangeEventHandler<HTMLInputElement>;
  value: string | number;
}
