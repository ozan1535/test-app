import { Dispatch, SetStateAction } from "react";

export const copyLink = (
  websiteUrl: string,
  pathname: string,
  setIsCopied: Dispatch<SetStateAction<boolean>>
) => {
  navigator.clipboard.writeText(`${websiteUrl}${pathname}`); // Dynamically get the current URL
  setIsCopied(true);

  setTimeout(() => {
    setIsCopied(false);
  }, 2000);
};
