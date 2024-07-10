import { IResult } from "@/app/types";
import { ISelectedQuestionOptions } from "../TestItems/TestItems.types";

export interface ITestResult {
  results: IResult[];
  selectedQuestionOptions: ISelectedQuestionOptions[];
}
