import { ITabIndexStore } from "@/app/types";
import { Dispatch, SetStateAction } from "react";

export interface IBlogProperties {
  title: string;
  media?: File;
  mediaUrl: string;
  content: string;
  excerpt: string;
}

export interface IAddBlog {
  setTabIndexStore: Dispatch<SetStateAction<ITabIndexStore>>;
}
