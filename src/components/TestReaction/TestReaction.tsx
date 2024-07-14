import { useSession } from "next-auth/react";
import Image from "next/image";
import {
  countEmojisForEach,
  emojis,
  getEmojiReactionItems,
  handleReactionRequest,
} from "./TestReaction.helpers";
import { useAppContext } from "@/app/context";
import Login from "../Login/Login";
import { ITestReaction } from "./TestReaction.types";
import RequestFailedMessage from "../RequestFailedMessage/RequestFailedMessage";

export default function TestReaction({
  title,
  emojiReactions,
  currentEmojiReactions,
  currentEmojisMutate,
}: ITestReaction) {
  const { setModalProps } = useAppContext();
  const { data: session } = useSession();
  const items = getEmojiReactionItems(currentEmojiReactions, emojiReactions);
  const emojiCounts = countEmojisForEach(items);
  const currentUserEmoji = items.find(
    (item) => item.userEmail === session?.user?.email
  )?.emoji;
  return (
    <div className="flex">
      {emojis.map((emoji) => (
        <div className="flex flex-col items-center mx-4" key={emoji.name}>
          <Image
            src={emoji.source}
            width={50}
            height={50}
            alt={emoji.name}
            className={`p-1 ${currentUserEmoji === emoji.name ? "bg-green-400" : "bg-slate-200"
              } rounded-full cursor-pointer`}
            cy-item={emoji.name}
            onClick={() =>
              handleReactionRequest(
                session,
                emoji,
                title,
                currentEmojisMutate,
                setModalProps,
                <Login />,
                currentUserEmoji === emoji.name,
                <RequestFailedMessage />
              )
            }
          />
          <span className="text-gray-500">{emojiCounts[emoji.name] || 0}</span>
        </div>
      ))}
    </div>
  );
}
