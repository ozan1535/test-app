import { Dispatch, SetStateAction } from "react";

export const copyLink = (
  pathname: string,
  setIsCopied: Dispatch<SetStateAction<boolean>>
) => {
  navigator.clipboard.writeText(`URL${pathname}`); // Dynamically get the current URL
  setIsCopied(true);

  setTimeout(() => {
    setIsCopied(false);
  }, 2000);
};
