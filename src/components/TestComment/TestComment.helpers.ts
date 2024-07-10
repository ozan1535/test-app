import { KeyedMutator } from "swr";
import { Session } from "next-auth";
import { randomBytes } from "crypto";
import { Dispatch, ReactNode, SetStateAction } from "react";
import { generateFolderName, handleRequest } from "@/helpers/helpers";
import { IModalProps } from "../Modal/Modal.types";

export const handleLoginModalShow = (
  session: Session | null,
  setModalProps: Dispatch<SetStateAction<IModalProps>>,
  login: ReactNode
) => {
  if (!session) {
    setModalProps((prev) => ({
      ...prev,
      isOpen: true,
      component: login,
    }));
  }
};

export const updateCommentAndCommentData = (
  setComment: Dispatch<SetStateAction<string>>,
  mutate: KeyedMutator<any>
) => {
  setComment("");
  mutate();
};

export const handleCommentRequest = (
  comment: string,
  title: string,
  session: Session | null,
  setComment: Dispatch<SetStateAction<string>>,
  mutate: KeyedMutator<any>,
  setModalProps: Dispatch<SetStateAction<IModalProps>>,
  component: ReactNode
) => {
  const cryptoId = randomBytes(16).toString("hex");
  const data = {
    [cryptoId]: {
      comment,
      testName: title,
      slug: generateFolderName(title),
      userEmail: session?.user?.email,
      userImage: session?.user?.image,
      userName: session?.user?.name,
    },
  };

  handleRequest(
    data,
    "post",
    () => updateCommentAndCommentData(setComment, mutate),
    `/api/post?collection=comments&document=${generateFolderName(title)}`,
    setModalProps,
    component
  );
};
