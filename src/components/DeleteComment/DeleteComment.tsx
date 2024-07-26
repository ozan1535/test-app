import { handleRequest } from "@/helpers/helpers";
import Button from "../Button/Button";
import { DeleteComment } from "./DeleteComment.types";
import RequestFailedMessage from "../RequestFailedMessage/RequestFailedMessage";

export default function DeleteComment({
  setModalProps,
  mutate,
  comment,
}: DeleteComment) {
  return (
    <div className="px-5 pb-5 w-96">
      <p className="mb-2">
        Are you sure you want to delete <b>{comment.comment}</b>?
      </p>
      <Button
        type="submit"
        isButtonSecondary={true}
        name="Delete"
        handleFunction={() => {
          handleRequest(
            null,
            "delete",
            () => {
              setModalProps((prev) => ({
                ...prev,
                component: null,
                isOpen: false,
              }));
              mutate();
            },
            `/api/delete?collection=comments&documentId=${comment.id}&document=${comment.slug}`,
            setModalProps,
            <RequestFailedMessage />
          );
        }}
      />
    </div>
  );
}
