import ProfileItems from "@/components/ProfileItems/ProfileItems";
import { serverAuth } from "../../../auth";
import { getData, profileItemsWithId } from "@/helpers/helpers";

export default async function Page() {
  const session = await serverAuth();
  if (!session) {
    // Handle no session case, you can either return a message or redirect
    return <p>Please log in to view your profile.</p>;
  }
  const comments = (await getData("comments")) as any;
  const favourites = (await getData(
    "favourites",
    session?.user?.email || "",
    true
  )) as any;
  const emojiReactions = (await getData("emoji-reactions")) as any;
  const filteredComments = profileItemsWithId(
    comments,
    "userEmail",
    session?.user?.email || ""
  );

  const favouriteDataWithId = Object.entries(favourites).map(
    ([favouriteId, favouriteData]) => ({
      favouriteId,
      ...favouriteData,
    })
  );

  const emojiReactionsWithId = profileItemsWithId(
    emojiReactions,
    "id",
    session?.user?.email
  );
  return (
    <ProfileItems
      session={session}
      comments={filteredComments}
      favourites={favouriteDataWithId}
      emojiReactions={emojiReactionsWithId}
    />
  );
}
