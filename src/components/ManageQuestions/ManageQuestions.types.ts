import { IFormItems, ITabIndexStore } from "@/app/types";
import { Dispatch, SetStateAction } from "react";

export interface IManageQuestions {
  formItems: IFormItems;
  setFormItems: Dispatch<SetStateAction<IFormItems>>;
  setTabIndexStore: Dispatch<SetStateAction<ITabIndexStore>>;
  questionTabIndex: number;
  questionOptionTabIndex: number;
}
