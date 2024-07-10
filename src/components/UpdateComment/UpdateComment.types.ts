import { KeyedMutator } from "swr";

export interface IUpdateComment {
  comment: string;
  commentId: string;
  slug: string;
  mutate: KeyedMutator<any>;
}
