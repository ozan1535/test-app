import { KeyedMutator } from "swr";

export interface ITestComment {
  title: string;
  mutate: KeyedMutator<any>;
}
