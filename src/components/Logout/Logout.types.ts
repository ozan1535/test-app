import { Dispatch, SetStateAction } from "react";
import { IModalProps } from "../Modal/Modal.types";

export interface ILogout {
  setModalProps: Dispatch<SetStateAction<IModalProps>>;
}
