import { useSession } from "next-auth/react";
import Image from "next/image";
import Button from "../Button/Button";
import { useAppContext } from "@/app/context";
import { useState } from "react";
import {
  handleCommentRequest,
  handleLoginModalShow,
} from "./TestComment.helpers";
import Login from "../Login/Login";
import { ITestComment } from "./TestComment.types";
import RequestFailedMessage from "../RequestFailedMessage/RequestFailedMessage";

export default function TestComment({ title, mutate }: ITestComment) {
  const { data: session } = useSession();
  const { setModalProps } = useAppContext();

  const [comment, setComment] = useState("");

  return (
    <div className="bg-slate-200 rounded p-4 flex flex-col gap-2">
      <p>Comment</p>
      <div className="flex w-full items-start gap-2">
        {session && (
          <Image
            src={session?.user?.image || ""}
            width={50}
            height={50}
            alt="User picture"
            className="rounded-full"
          />
        )}
        <textarea
          name="comment"
          rows={3}
          className="w-full resize-none p-4"
          value={comment}
          placeholder="Share your comment here! &#128578;"
          onClick={() =>
            handleLoginModalShow(session, setModalProps, <Login />)
          }
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
      </div>
      <div className="flex w-full justify-end">
        {session && (
          <Button
            type="button"
            name={"Comment"}
            isButtonSecondary={false}
            isButtonDisabled={comment === ""}
            handleFunction={() =>
              handleCommentRequest(
                comment,
                title,
                session,
                setComment,
                mutate,
                setModalProps,
                <RequestFailedMessage />
              )
            }
          />
        )}
      </div>
    </div>
  );
}
