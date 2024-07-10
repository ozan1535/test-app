import { useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { useAppContext } from "@/app/context";
import { IUpdateComment } from "./UpdateComment.types";
import { handleUpdateCommentSubmit } from "./UpdateComment.helpers";
import RequestFailedMessage from "../RequestFailedMessage/RequestFailedMessage";

export default function UpdateComment({
  comment,
  commentId,
  slug,
  mutate,
}: IUpdateComment) {
  const [updateComment, setUpdateComment] = useState(comment || "");
  const { setModalProps } = useAppContext();

  const canUpdateComment = updateComment === comment || updateComment === "";

  return (
    <div className="p-4">
      <Input
        name="updateComment"
        type="text"
        handleFunction={(e) => setUpdateComment(e.target.value)}
        value={updateComment}
      />
      <div className="mt-4">
        <Button
          type="submit"
          isButtonSecondary={false}
          name="Update"
          handleFunction={() =>
            handleUpdateCommentSubmit(
              updateComment,
              setModalProps,
              mutate,
              commentId,
              slug,
              <RequestFailedMessage />
            )
          }
          isButtonDisabled={canUpdateComment}
        />
      </div>
    </div>
  );
}
