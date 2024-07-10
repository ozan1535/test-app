import Image from "next/image";
import TestQuestionOptions from "../TestQuestionOptions/TestQuestionOptions";
import ITestQuestions from "./TestQuestions.types";

export default function TestQuestions({
  questions,
  setSelectedQuestionOptions,
}: ITestQuestions) {
  return (
    <>
      {questions.map((question, index) => (
        <div className="py-2" key={index}>
          <h4 className="text-xl font-bold">
            {index + 1}. {question.questionTitle}
          </h4>
          <Image
            src={question.questionMediaUrl}
            alt="Question media"
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto pb-2"
            priority={false}
          />
          <TestQuestionOptions
            options={question.options}
            questionTitle={question.questionTitle}
            questionIndex={index}
            setSelectedQuestionOptions={setSelectedQuestionOptions}
          />
        </div>
      ))}
    </>
  );
}
