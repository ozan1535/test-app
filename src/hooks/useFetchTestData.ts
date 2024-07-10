import { generateFolderName, getData, isValueInData } from "@/helpers/helpers";

export const useFetchTestData = async (
  slug: string,
  userEmail: string | null | undefined
) => {
  const tests = (await getData("tests")) as any;
  const singleTest = tests.find(
    (test) => generateFolderName(test.title) === slug
  );
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

  return { singleTest, commentsValues, emojiReactions, isCurrentTestFavourite };
};
