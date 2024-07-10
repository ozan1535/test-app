import { Dispatch, SetStateAction } from "react";
import { IFormItems, IResult, ITabIndexStore } from "@/app/types";

export interface IManageResults {
  results: IResult[];
  resultTabIndex: number;
  formItems: IFormItems;
  setFormItems: Dispatch<SetStateAction<IFormItems>>;
  setTabIndexStore: Dispatch<SetStateAction<ITabIndexStore>>;
}
