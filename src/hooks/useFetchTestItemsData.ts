import { generateFolderName } from "@/helpers/helpers";
import useGetData from "./useGetData";
import { Session } from "next-auth";

export const useFetchTestItemsData = (
  session: Session | null,
  title: string
) => {
  const { data: currentComments, mutate: commentMutate } = useGetData(
    "comments",
    generateFolderName(title),
    true
  );

  const { data: currentEmojis, mutate: currentEmojisMutate } = useGetData(
    "emoji-reactions",
    generateFolderName(title),
    true
  );
  const { data: currentFavourites, mutate: currentFavouritesMutate } =
    useGetData("favourites", session?.user?.email as string, true);

  return {
    currentComments,
    commentMutate,
    currentEmojis,
    currentEmojisMutate,
    currentFavourites,
    currentFavouritesMutate,
  };
};
