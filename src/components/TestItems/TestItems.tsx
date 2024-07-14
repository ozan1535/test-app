"use client";
import { useEffect, useRef, useState } from "react";
import { useSession } from "next-auth/react";
import TestQuestions from "../TestQuestions/TestQuestions";
import TestResult from "../TestResult/TestResult";
import { ITestItems } from "./TestItems.types";
import TestComment from "../TestComment/TestComment";
import Widget from "../Widget/Widget";
import TestReaction from "../TestReaction/TestReaction";
import Comments from "../Comments/Comments";
import { isValueInData } from "@/helpers/helpers";
import Login from "../Login/Login";
import { useAppContext } from "@/app/context";
import { handleFavouriteRequest } from "./TestItems.helpers";
import { useFetchTestItemsData } from "@/hooks/useFetchTestItemsData";
import ShareButtons from "../ShareButtons/ShareButtons";
import RequestFailedMessage from "../RequestFailedMessage/RequestFailedMessage";

export default function TestItems({
  questions,
  results,
  title,
  mainMediaUrl,
  description,
  comments,
  emojiReactions,
  isCurrentTestFavourite,
}: ITestItems) {
  const { data: session } = useSession();

  const { setModalProps } = useAppContext();

  const {
    currentComments,
    commentMutate,
    currentEmojis,
    currentEmojisMutate,
    currentFavourites,
    currentFavouritesMutate,
  } = useFetchTestItemsData(session, title);

  const [selectedQuestionOptions, setSelectedQuestionOptions] = useState(
    questions.map(() => ({ answer: "", for: "" }))
  );

  const hasAllQuestionsAnswered = selectedQuestionOptions.every(
    (a) => a.for !== ""
  );

  const resultRef = useRef<HTMLDivElement>(null);

  const isTestFavourite =
    isValueInData(currentFavourites, "title", title) || isCurrentTestFavourite;

  useEffect(() => {
    if (hasAllQuestionsAnswered && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [hasAllQuestionsAnswered]);

  return (
    <>
      <TestQuestions
        questions={questions}
        setSelectedQuestionOptions={setSelectedQuestionOptions}
      />
      {hasAllQuestionsAnswered && (
        <div ref={resultRef}>
          <TestResult
            results={results}
            selectedQuestionOptions={selectedQuestionOptions}
          />
        </div>
      )}
      <br />
      <Widget
        media="/surprised-face.svg"
        title="REACT THIS TEST WITH AN EMOJI!"
      />
      <TestReaction
        title={title}
        emojiReactions={emojiReactions}
        currentEmojiReactions={currentEmojis}
        currentEmojisMutate={currentEmojisMutate}
      />
      <br />
      <div
        className="cursor-pointer"
        cy-item="favourite"
        onClick={() =>
          handleFavouriteRequest(
            session,
            title,
            description,
            mainMediaUrl,
            currentFavouritesMutate,
            setModalProps,
            <Login />,
            isTestFavourite,
            <RequestFailedMessage />
          )
        }
      >
        <span
          className={`${isTestFavourite ? "bg-green-400" : "bg-slate-200"
            } p-2 rounded`}
        >
          Add Favourite
        </span>
      </div>
      <br />
      <ShareButtons title={title} />
      <br />
      <TestComment title={title} mutate={commentMutate} />
      <br />
      {(comments || currentComments) && (
        <Comments
          initialComments={comments}
          currentComments={currentComments}
        />
      )}
    </>
  );
}
