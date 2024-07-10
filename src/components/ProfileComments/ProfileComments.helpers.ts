import {
  Dispatch,
  MouseEvent,
  MouseEventHandler,
  ReactNode,
  SetStateAction,
} from "react";
import { IModalProps } from "../Modal/Modal.types";

export const handleEditComment = (
  e: MouseEvent<HTMLImageElement, any>,
  setModalProps: Dispatch<SetStateAction<IModalProps>>,
  updateComment: ReactNode
) => {
  e.preventDefault();
  setModalProps((prev) => ({
    ...prev,
    isOpen: true,
    component: updateComment,
  }));
};
