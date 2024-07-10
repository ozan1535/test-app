import { Dispatch, SetStateAction } from "react";
import { KeyedMutator } from "swr";
import { IModalProps } from "../Modal/Modal.types";
import { IComment } from "@/app/types";

export interface DeleteComment {
  setModalProps: Dispatch<SetStateAction<IModalProps>>;
  mutate: KeyedMutator<any>;
  comment: IComment;
}
