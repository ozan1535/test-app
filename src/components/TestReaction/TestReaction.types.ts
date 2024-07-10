import { IEmojiReaction } from "@/app/types";
import { KeyedMutator } from "swr";

export interface ITestReaction {
  title: string;
  emojiReactions: Record<string, IEmojiReaction>;
  currentEmojiReactions: Record<string, IEmojiReaction> | undefined;
  currentEmojisMutate: KeyedMutator<any>;
}

export interface ITestReactionItem {
  emoji: string;
  userEmail: string;
}
