import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  XIcon,
} from "react-share";
import CopiedIcon from "./CopiedIcon";
import CopyIcon from "./CopyIcon";
import { copyLink } from "./ShareButtons.helpers";

export default function ShareButtons({ title }: { title: string }) {
  const [isCopied, setIsCopied] = useState(false);
  const pathname = usePathname();

  return (
    <div className="flex gap-2">
      <div
        onClick={() => copyLink(pathname, setIsCopied)}
        className="flex justify-center items-center"
        aria-label="Copy link"
      >
        {isCopied ? <CopiedIcon /> : <CopyIcon />}
      </div>
      <FacebookShareButton
        url={`URL${pathname}`}
        title={title}
        aria-label="Share on Facebook"
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TwitterShareButton
        url={`URL${pathname}`}
        title={title}
        via="Testarot"
        aria-label="Share on Twitter"
      >
        <XIcon size={32} round />
      </TwitterShareButton>
      <WhatsappShareButton
        url={`URL${pathname}`}
        title={title}
        separator=" - "
        className="Demo__some-network__share-button"
        aria-label="Share on Whatsapp"
      >
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
    </div>
  );
}
