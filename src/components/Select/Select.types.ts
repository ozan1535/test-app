import { ChangeEventHandler } from "react";
import { ITestCategories } from "../Header/Header.types";
import { IResult } from "@/app/types";

export interface ISelect {
  name: string;
  handleFunction: ChangeEventHandler<HTMLSelectElement>;
  value: string;
  options: (ITestCategories | IResult)[];
  optionKey: string;
  isDisabled: boolean;
}
