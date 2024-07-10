import { IComment } from "@/app/types";
import { Session } from "next-auth";

export interface IProfileComments {
  comments: IComment[];
  session: Session | null;
}
