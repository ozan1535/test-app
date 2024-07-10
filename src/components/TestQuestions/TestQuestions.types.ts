import { IQuestion } from "@/app/types";
import { Dispatch, SetStateAction } from "react";
import { ISelectedQuestionOptions } from "../TestItems/TestItems.types";

export default interface ITestQuestions {
  questions: IQuestion[];
  setSelectedQuestionOptions: Dispatch<
    SetStateAction<ISelectedQuestionOptions[]>
  >;
}
