"use client";
import { generateFolderName } from "@/helpers/helpers";
import Image from "next/image";
import Link from "next/link";
import { getCardEmoji } from "./Card.helpers";
import { IFormItems } from "@/app/types";
import { testCategories } from "../Header/headerItems";

export default function Card({ test }: { test: IFormItems }) {
  const categoryName = testCategories?.find(category => generateFolderName(category.name) === test.category)?.name || "";

  return (
    <Link href={`/test/${generateFolderName(test.title)}`} className="group" cy-item="card">
      <div className="group relative bg-white flex flex-col lg:flex-row w-full h-auto lg:h-44 rounded shadow-md">
        <div className="flex justify-center items-center w-full lg:w-1/2 h-40 lg:h-full">
          <Image
            src={test.mainMediaUrl}
            width={200}
            height={90}
            alt="Test media"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col p-4 justify-evenly gap-3 w-full lg:w-2/3 h-auto lg:h-full bg-white">
          <div>
            <p className="group-hover:text-blue-500 font-bold text-lg">{test.title}</p>
            <span className="text-xs text-slate-500 block text-ellipsis">
              {test.description.slice(0, 150)}...
            </span>
          </div>
          <p className="text-slate-500 text-xs">{categoryName}</p>
        </div>
        <div className="absolute rounded-full w-10 h-10 -left-2 -top-2 bg-white shadow-md">
          <Image
            src={getCardEmoji(test.category)}
            width={50}
            height={50}
            alt="alt"
            className="w-full h-full"
          />
        </div>
      </div>
    </Link>
  );
}
