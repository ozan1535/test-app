import { IComment, IEmojiReaction, IFavourite } from "@/app/types";
import { Session } from "next-auth";

export interface IProfileItems {
  session: Session | null;
  comments: IComment[];
  favourites: IFavourite[];
  emojiReactions: IEmojiReaction[];
}

export interface IProfileItemsIndex {
  profileItemsIndex: number;
}
