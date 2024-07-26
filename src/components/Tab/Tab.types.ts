import { IOption, IQuestion, IResult, ITabIndexStore } from "@/app/types";
import { Dispatch, SetStateAction } from "react";

export interface ITab {
  items: (IQuestion | IResult | IOption | string)[];
  handleFunction: (
    index: number,
    itemName: string,
    setTabIndexStore: Dispatch<SetStateAction<ITabIndexStore>>
  ) => void;
  currentIndex: number;
  itemName: string;
  setTabIndexStore: Dispatch<SetStateAction<ITabIndexStore>>;
  title?: null | string;
}
