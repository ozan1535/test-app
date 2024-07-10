import { IComment } from "@/app/types";

export const currentCommentsValues = (
  currentComments: IComment[] | undefined
) => {
  return (
    currentComments &&
    Object.values(currentComments)?.sort(
      (a, b) => b.createdAt.seconds - a.createdAt.seconds
    )
  );
};
