import {
  generateFolderName,
  handleTestPropertyRequest,
} from "@/helpers/helpers";
import { Dispatch, ReactNode, SetStateAction } from "react";
import { KeyedMutator } from "swr";
import { IModalProps } from "../Modal/Modal.types";
import { Session } from "next-auth";
import { ITestReactionItem } from "./TestReaction.types";
import { IEmojiReaction } from "@/app/types";

export const emojis = [
  {
    source: "/love-emoji.gif",
    name: "love",
  },
  {
    source: "/like-emoji.gif",
    name: "like",
  },
  {
    source: "/dislike-emoji.gif",
    name: "dislike",
  },
  {
    source: "/angry-emoji.gif",
    name: "angry",
  },
];

export interface IEmoji {
  source: string;
  name: string;
}

export const handleReactionRequest = (
  session: Session | null,
  emoji: IEmoji,
  title: string,
  currentEmojisMutate: KeyedMutator<any>,
  setModalProps: Dispatch<SetStateAction<IModalProps>>,
  login: ReactNode,
  isEmojiSelected: boolean,
  requestFailedMessage: ReactNode
) => {
  if (isEmojiSelected) return;
  if (!session) {
    setModalProps((prev) => ({
      ...prev,
      isOpen: true,
      component: login,
    }));
    return;
  }
  const data = {
    [session.user?.email as string]: {
      emoji: emoji.name,
      slug: generateFolderName(title),
      title,
    },
  };

  handleTestPropertyRequest(
    session,
    data,
    "post",
    () => currentEmojisMutate(),
    `/api/post?collection=emoji-reactions&document=${generateFolderName(
      title
    )}`,
    setModalProps,
    login,
    requestFailedMessage
  );
};

export const getEmojiReactionItems = (
  currentEmojiReactions: Record<string, IEmojiReaction> | undefined,
  emojiReactions: Record<string, IEmojiReaction>
) => {
  const reactions = currentEmojiReactions || emojiReactions;
  if (!reactions) return [];

  return Object.entries(reactions).map(([userEmail, { emoji }]) => ({
    userEmail,
    emoji,
  }));
};

export const countEmojisForEach = (emojiReactions: ITestReactionItem[]) => {
  if (!emojiReactions) return {};

  return emojiReactions.reduce(
    (counts: { [emoji: string]: number }, { emoji }) => {
      counts[emoji] = (counts[emoji] || 0) + 1;
      return counts;
    },
    {} as { [emoji: string]: number }
  );
};
