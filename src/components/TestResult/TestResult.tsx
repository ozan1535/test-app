import Image from "next/image";
import { ITestResult } from "./TestResult.types";
import { findMostFrequentForValue } from "./TestResult.helper";

export default function TestResult({
  results,
  selectedQuestionOptions,
}: ITestResult) {
  const mostFrequentForValue = findMostFrequentForValue(
    selectedQuestionOptions
  );
  const resultItem = results.filter(
    (result) => result.resultTitle === mostFrequentForValue
  );

  return (
    <div className="py-2">
      <h4 className="text-xl font-bold">{resultItem[0].resultTitle}</h4>
      <Image
        src={resultItem[0].resultMediaUrl}
        alt="Question media"
        width="0"
        height="0"
        sizes="100vw"
        className="w-full h-auto pb-2"
        priority={false}
      />
      <p>{resultItem[0].resultDescription}</p>
    </div>
  );
}
