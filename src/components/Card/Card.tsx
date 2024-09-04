"use client";
import Image from "next/image";
import Link from "next/link";
import { generateFolderName } from "@/helpers/helpers";
import { getCardEmoji } from "./Card.helpers";
import { testCategories } from "../Header/headerItems";
import { ICard } from "./Card.types";

export default function Card({
  type,
  title,
  mediaUrl,
  excerpt,
  category,
  canShowEmoji = true,
}: ICard) {
  const categoryName =
    testCategories?.find(
      (testCategorie) => generateFolderName(testCategorie.name) === category
    )?.name || "";

  return (
    <Link
      href={`/${type}/${generateFolderName(title)}`}
      className="group"
      cy-item="card"
    >
      <div className="group relative bg-white flex flex-col lg:flex-row w-full h-auto lg:h-44 shadow-md rounded-lg">
        <div className="flex justify-center items-center w-full lg:w-1/2 h-40 lg:h-full rounded-t-lg lg:rounded-l-lg">
          <Image
            src={mediaUrl}
            width={200}
            height={90}
            alt="Test media"
            className="object-cover w-full h-full rounded-t-lg lg:rounded-l-lg"
          />
        </div>
        <div className="flex flex-col px-4 py-2 justify-between gap-3 w-full lg:w-2/3 h-auto lg:h-full bg-white rounded-b-lg lg:rounded-b-none lg:rounded-r-lg">
          <div>
            <p className="group-hover:text-blue-500 font-bold text-lg">
              {title}
            </p>
            <span className="text-xs text-slate-500 block text-ellipsis">
              {excerpt.slice(0, 150)}...
            </span>
          </div>
          <p className="text-slate-500 text-xs">{categoryName}</p>
        </div>
        {canShowEmoji && category && (
          <div className="absolute rounded-full w-10 h-10 -left-2 -top-2">
            <Image
              src={getCardEmoji(category)}
              width={50}
              height={50}
              alt="alt"
              className="w-full h-full"
            />
          </div>
        )}
      </div>
    </Link>
  );
}
