import Image from "next/image";
import { IWidget } from "./Widget.types";

export default function Widget({ media, title }: IWidget) {
  return (
    <div className="flex items-center w-full mb-5 font-medium px-4  mt-2">
      <span className="sm:mr-2.5 mr-2 -ml-0.5">
        <Image src={media} height={50} width={50} alt="media" />
      </span>
      <h2 className="leading-18 text-20 font-semibold sm:text-24 mr-2">
        {title}
      </h2>
      <div className="border-t border-[#E2E5ED] flex-grow"></div>
    </div>
  );
}
