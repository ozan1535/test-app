import Image from "next/image";
import { IComments } from "./Comments.types";
import { currentCommentsValues } from "./Comments.helpers";

export default function Comments({
  initialComments,
  currentComments,
}: IComments) {
  const currentSortedComments =
    currentCommentsValues(currentComments) || initialComments;

  return (
    <>
      {currentSortedComments.map((comment, index) => (
        <div
          className="w-full mx-auto border px-6 py-4 my-1 rounded-lg"
          key={index}
          cy-item={`testComment${index}`}
        >
          <div className="flex items-center mb-6">
            <Image
              src={comment.userImage}
              width={50}
              height={50}
              alt="Avatar"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <div className="text-lg font-medium text-gray-800">
                {comment.userName}
              </div>
              <div className="text-gray-500 text-xs">
                {new Date(
                  comment.createdAt?.seconds * 1000 +
                  comment.createdAt?.nanoseconds / 1000000
                ).toLocaleString("en-US", {
                  hour12: false,
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                  hour: "numeric",
                  minute: "numeric",
                  second: "numeric",
                })}
              </div>
            </div>
          </div>
          <p className="text-sm leading-relaxed bg-slate-100">
            {comment.comment}
          </p>
        </div>
      ))}
    </>
  );
}
