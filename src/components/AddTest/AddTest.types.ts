import { IFormItems, ITabIndexStore } from "@/app/types";
import { Dispatch, SetStateAction } from "react";
import { IModalProps } from "../Modal/Modal.types";

export interface IAddTest {
  tabIndexStore: ITabIndexStore;
  setTabIndexStore: Dispatch<SetStateAction<ITabIndexStore>>;
  formItems: IFormItems;
  setFormItems: Dispatch<SetStateAction<IFormItems>>;
  setModalProps: Dispatch<SetStateAction<IModalProps>>;
}
