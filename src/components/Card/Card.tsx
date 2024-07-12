"use client";
import { generateFolderName } from "@/helpers/helpers";
import Image from "next/image";
import Link from "next/link";
import { getCardEmoji } from "./Card.helpers";
import { IFormItems } from "@/app/types";

export default function Card({ test }: { test: IFormItems }) {
  return (
    <Link href={`/test/${generateFolderName(test.title)}`} className="group" cy-item="card">
      <div className="group relative bg-white flex w-full h-72 lg:h-40 rounded flex-col lg:flex-row">
        <div className="flex justify-center items-center overflow-hidden w-full lg:w-1/2 h-full ">
          <Image
            src={test.mainMediaUrl}
            width={200}
            height={90}
            alt="Test media"
            className="object-cover rounded-bl w-full h-full"
          />
        </div>
        <div className="flex flex-col p-2 justify-start gap-3 group-hover:text-blue-500 w-1/2 h-1/3 lg:h-full">
          <b>{test.title}</b>
          <span className="text-xs text-slate-500">
            {test.description.slice(0, 100)}...
          </span>
        </div>
        <div className="absolute rounded-full w-10 h-10 -left-2 -top-2">
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
