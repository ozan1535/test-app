"use client";
import { useState } from "react";
import Image from "next/image";
import Tab from "../Tab/Tab";
import { updateTabIndex } from "@/helpers/helpers";
import ProfileComments from "../ProfileComments/ProfileComments";
import ProfileEmojiReactions from "../ProfileEmojiReactions/ProfileEmojiReactions";
import ProfileFavourites from "../ProfileFavourites/ProfileFavourites";
import { IProfileItems, IProfileItemsIndex } from "./ProfileItems.types";
import { ITabIndexStore } from "@/app/types";
import { profileItemsTabs } from "./ProfileItems.helpers";

export default function ProfileItems({
  session,
  comments,
  favourites,
  emojiReactions,
}: IProfileItems) {
  const [profileItemsTabIndex, setProfileItemsTabIndex] =
    useState<ITabIndexStore>({
      profileItemsIndex: 0,
    });

  return (
    <>
      <div className="w-full flex justify-center">
        <Image
          src={session?.user?.image || ""}
          alt="Use profile picture"
          width={50}
          height={50}
          className="rounded-full"
        />
      </div>
      <Tab
        items={profileItemsTabs}
        handleFunction={updateTabIndex}
        currentIndex={profileItemsTabIndex.profileItemsIndex || 0}
        itemName="profileItemsIndex"
        setTabIndexStore={setProfileItemsTabIndex}
      />
      {profileItemsTabIndex.profileItemsIndex === 0 ? (
        <ProfileComments comments={comments} session={session} />
      ) : profileItemsTabIndex.profileItemsIndex === 1 ? (
        <ProfileFavourites favourites={favourites} />
      ) : (
        <ProfileEmojiReactions emojiReactions={emojiReactions} />
      )}
    </>
  );
}
