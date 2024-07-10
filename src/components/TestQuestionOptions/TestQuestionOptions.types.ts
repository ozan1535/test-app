import { IOption } from "@/app/types";
import { Dispatch, SetStateAction } from "react";
import { ISelectedQuestionOptions } from "../TestItems/TestItems.types";

export interface ITestQuestionOptions {
  options: IOption[];
  questionTitle: string;
  questionIndex: number;
  setSelectedQuestionOptions: Dispatch<
    SetStateAction<ISelectedQuestionOptions[]>
  >;
}
