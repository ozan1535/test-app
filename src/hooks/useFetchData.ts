import { generateFolderName, getData, isValueInData } from "@/helpers/helpers";

export const useFetchData = async (
  slug: string,
  userEmail?: string | null | undefined
) => {
  const getSingleData = async (type) => {
    const items = (await getData(type)) as any;
    return items.find((item) => generateFolderName(item.title) === slug);
  };

  const singleTest = await getSingleData("tests");
  const singleBlog = await getSingleData("blogs");

  const comments = (await getData("comments", slug, true)) as any;
  const commentsValues =
    comments &&
    Object.values(comments).sort(
      (a, b) => b.createdAt.seconds - a.createdAt.seconds
    );

  const emojiReactions = (await getData("emoji-reactions", slug, true)) as any;
  const favourites = userEmail
    ? ((await getData("favourites", userEmail, true)) as any)
    : [];
  const isCurrentTestFavourite = isValueInData(favourites, "title", slug);

  return {
    singleTest,
    commentsValues,
    emojiReactions,
    isCurrentTestFavourite,
    singleBlog,
  };
};
