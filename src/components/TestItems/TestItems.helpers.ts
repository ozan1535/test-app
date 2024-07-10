import { Session } from "next-auth";
import { Dispatch, ReactNode, SetStateAction } from "react";
import { KeyedMutator } from "swr";
import {
  generateFolderName,
  handleTestPropertyRequest,
} from "@/helpers/helpers";
import { IModalProps } from "../Modal/Modal.types";

export const handleFavouriteRequest = (
  session: Session | null,
  title: string,
  description: string,
  mainMediaUrl: string,
  currentFavouritesMutate: KeyedMutator<any>,
  setModalProps: Dispatch<SetStateAction<IModalProps>>,
  login: ReactNode,
  isTestFavourite: boolean,
  requestFailedMessage: ReactNode
) => {
  if (isTestFavourite) {
    handleTestPropertyRequest(
      session,
      null,
      "delete",
      () => currentFavouritesMutate(),
      `/api/delete?collection=favourites&document=${
        session?.user?.email
      }&documentId=${generateFolderName(title)}`,
      setModalProps,
      login,
      requestFailedMessage
    );
  } else {
    const data = {
      [generateFolderName(title)]: {
        title,
        description,
        mainMediaUrl,
      },
    };

    handleTestPropertyRequest(
      session,
      data,
      "post",
      () => currentFavouritesMutate(),
      `/api/post?collection=favourites&document=${session?.user?.email}`,
      setModalProps,
      login,
      requestFailedMessage
    );
  }
};
