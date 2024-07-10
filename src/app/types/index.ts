import { ChangeEvent, Dispatch, SetStateAction } from "react";

export interface IOption {
  answer: string;
  for: string;
}

export interface IQuestion {
  questionTitle: string;
  questionMedia?: File;
  questionMediaUrl: string;
  options: IOption[];
}

export interface IResult {
  resultTitle: string;
  resultDescription: string;
  resultMedia?: File;
  resultMediaUrl: string;
}

export interface IFormItems {
  title: string;
  description: string;
  category: string;
  mainMedia?: File;
  mainMediaUrl: string;
  questions: IQuestion[];
  results: IResult[];
}

export interface ITabIndexStore {
  questionTabIndex?: number;
  questionOptionTabIndex?: number;
  resultTabIndex?: number;
  generalTabIndex?: number;
  profileItemsIndex?: number;
}

export type IHandleFieldChange<T> = (
  e: ChangeEvent<HTMLInputElement>,
  index: number,
  formItems: IFormItems,
  setFormItems: Dispatch<SetStateAction<IFormItems>>,
  fieldType: "questions" | "results"
) => void;

export type IParams = {
  params: { slug: string };
};

export interface ICreatedAt {
  seconds: number;
  nanoseconds: number;
}

export interface IComment {
  id?: string;
  comment: string;
  createdAt: ICreatedAt;
  slug: string;
  testName: string;
  userEmail: string;
  userImage: string;
  userName: string;
}

export interface IEmojiReaction {
  createdAt: ICreatedAt;
  emoji: string;
  slug: string;
  title: string;
}

export interface IFavourite {
  description: string;
  title: string;
  mainMediaUrl: string;
  createdAt: ICreatedAt;
  favouriteId?: string;
}
