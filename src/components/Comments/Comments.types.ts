import { IComment } from "@/app/types";

export interface IComments {
  initialComments: IComment[];
  currentComments: IComment[] | undefined;
}
