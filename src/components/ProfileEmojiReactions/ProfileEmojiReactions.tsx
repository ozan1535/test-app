import Link from "next/link";
import { IProfileEmojiReactions } from "./ProfileEmojiReactions.types";

export default function ProfileEmojiReactions({
  emojiReactions,
}: IProfileEmojiReactions) {
  return (
    <div>
      {emojiReactions.map((emojiReaction) => (
        <Link
          href={`/test/${emojiReaction.slug}`}
          className="flex justify-between items-center w-full p-6 bg-white border border-gray-200 rounded-lg shadow cursor-pointer hover:bg-gray-100"
          title="Click to visit this item"
          key={emojiReaction.slug}
        >
          <div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              {emojiReaction.title}
            </h5>
            <p className="font-normal text-gray-700">
              You have <b>{emojiReaction.emoji}</b> emoji for this test.
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
