import { IFormItems } from "@/app/types";
import { Dispatch, SetStateAction } from "react";

export interface IManageProperties {
  formItems: IFormItems;
  setFormItems: Dispatch<SetStateAction<IFormItems>>;
}
