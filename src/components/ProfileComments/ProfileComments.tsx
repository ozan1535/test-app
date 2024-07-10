import { useAppContext } from "@/app/context";
import Image from "next/image";
import Link from "next/link";
import UpdateComment from "../UpdateComment/UpdateComment";
import useGetData from "@/hooks/useGetData";
import { profileItemsWithId } from "@/helpers/helpers";
import DeleteComment from "../DeleteComment/DeleteComment";
import { IProfileComments } from "./ProfileComments.types";
import { handleEditComment } from "./ProfileComments.helpers";

export default function ProfileComments({
  comments,
  session,
}: IProfileComments) {
  const { setModalProps } = useAppContext();
  const { data, mutate } = useGetData("comments");
  const filteredComments = data
    ? profileItemsWithId(data, "userEmail", session?.user?.email)
    : comments;

  return (
    <div>
      {filteredComments
        .sort((a, b) => b.createdAt.seconds - a.createdAt.seconds)
        .map((comment, index) => (
          <Link
            href={`/test/${comment.slug}`}
            className="flex justify-between items-center w-full p-6 bg-white border border-gray-200 rounded-lg shadow cursor-pointer hover:bg-gray-100"
            title="Click to visit this item"
            key={comment.slug + index}
          >
            <div>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                {comment.testName}
              </h5>
              <p className="font-normal text-gray-700">{comment.comment}</p>
            </div>
            <div className="flex gap-3">
              <Image
                src="/pencil.svg"
                width={25}
                height={25}
                alt="Edit"
                title="Edit"
                onClick={(e) =>
                  handleEditComment(
                    e,
                    setModalProps,
                    <UpdateComment
                      comment={comment.comment}
                      commentId={comment.id}
                      slug={comment.slug}
                      mutate={mutate}
                    />
                  )
                }
              />
              <Image
                src="/garbage.svg"
                width={25}
                height={25}
                alt="Delete"
                title="Delete"
                onClick={(e) => {
                  e.preventDefault();
                  setModalProps((prev) => ({
                    ...prev,
                    isOpen: true,
                    component: (
                      <DeleteComment
                        setModalProps={setModalProps}
                        mutate={mutate}
                        comment={comment}
                      />
                    ),
                  }));
                }}
              />
            </div>
          </Link>
        ))}
    </div>
  );
}
