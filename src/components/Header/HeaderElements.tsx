"use client";
import Image from "next/image";
import Link from "next/link";
import HeaderDropdown from "./HeaderDropdown";
import { IHeaderElements } from "./Header.types";
import { Capriola } from "next/font/google";
const capriola = Capriola({ subsets: ["latin"], weight: "400" });

export default function HeaderElements({
  data,
  handleFunction,
}: IHeaderElements) {
  return (
    <div className="container flex justify-center items-center font-normal">
      <ul className="relative ml-8 space-x-4">
        {data.map((item, index) => (
          <li className="inline-block group" key={index}>
            {item.isPicture && item.source ? (
              <Link href={item.href || "#"}>
                <Image
                  src={item.source}
                  alt="alt"
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-5 h-5 cursor-pointer"
                  priority={true}
                  onClick={item.href === "#" ? handleFunction : undefined}
                />
              </Link>
            ) : (
              item.href && (
                <Link
                  href={item.href}
                  className={`${
                    item.isLogo
                      ? `${capriola.className} text-2xl p-0 font-bold`
                      : ""
                  } hover:text-black text-black p-3 font-medium`}
                >
                  {item.name}
                </Link>
              )
            )}
            {item.hasDropdown && <HeaderDropdown />}
          </li>
        ))}
      </ul>
    </div>
  );
}
