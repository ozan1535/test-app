import { KeyedMutator } from "swr";
import { Dispatch, ReactNode, SetStateAction } from "react";
import { handleRequest } from "@/helpers/helpers";
import { IModalProps } from "../Modal/Modal.types";

export const handleUpdateCommentSubmit = (
  updateComment: string,
  setModalProps: Dispatch<SetStateAction<IModalProps>>,
  mutate: KeyedMutator<any>,
  commentId: string,
  slug: string,
  component: ReactNode
) => {
  const data = { comment: updateComment };

  try {
    handleRequest(
      data,
      "put",
      () => {
        setModalProps((prev) => ({
          ...prev,
          component: null,
          isOpen: false,
        }));
        mutate();
      },
      `/api/put?commentId=${commentId}&document=${slug}`,
      setModalProps,
      component
    );
  } catch (error) {
    console.error("Failed to update comment", error);
  }
};
