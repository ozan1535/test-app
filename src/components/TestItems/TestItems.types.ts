import { IComment, IEmojiReaction, IQuestion, IResult } from "@/app/types";

export interface ITestItems {
  questions: IQuestion[];
  results: IResult[];
  title: string;
  mainMediaUrl: string;
  description: string;
  comments: IComment[];
  emojiReactions: Record<string, IEmojiReaction>;
  isCurrentTestFavourite: boolean;
}

export interface ISelectedQuestionOptions {
  answer: string;
  for: string;
}
