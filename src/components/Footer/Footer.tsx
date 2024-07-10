import Image from "next/image";
import { socialMedias } from "./Footer.helpers";

export default function Footer() {
  return (
    <div className="flex bg-green-300 h-12 text-slate-500 w-full justify-between items-center px-4">
      <div>© 2024 Testarot</div>
      <div className="flex gap-3">
        {socialMedias.map((socialMedia) => (
          <a href={socialMedia.url} target="_blank" key={socialMedia.url}>
            <Image
              src={socialMedia.media}
              alt="Social media icon"
              width={28}
              height={28}
            />
          </a>
        ))}
      </div>
    </div>
  );
}
