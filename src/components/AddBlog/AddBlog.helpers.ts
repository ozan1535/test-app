import { Dispatch, MouseEvent, ReactNode, SetStateAction } from "react";
import { IBlogProperties } from "./AddBlog.types";
import {
  generateFolderName,
  handleRequest,
  tabIndexStoreInitialProperties,
  uploadFileAndGetUrl,
} from "@/helpers/helpers";
import { IModalProps } from "../Modal/Modal.types";
import { randomBytes } from "crypto";
import { ITabIndexStore } from "@/app/types";

export const initialBlogProperties = {
  title: "",
  media: undefined,
  mediaUrl: "",
  content: "",
  excerpt: "",
};

export const handleBlogSubmit = async (
  e: MouseEvent,
  blogProperties: IBlogProperties,
  setModalProps: Dispatch<SetStateAction<IModalProps>>,
  component: ReactNode,
  setTabIndexStore: Dispatch<SetStateAction<ITabIndexStore>>,
  setBlogProperties: Dispatch<SetStateAction<IBlogProperties>>
) => {
  e.preventDefault();

  try {
    const folderName = generateFolderName(blogProperties.title);
    if (blogProperties.media) {
      const blogMediaUrl = await uploadFileAndGetUrl(
        "blogs",
        blogProperties.media,
        folderName
      );
      blogProperties.mediaUrl = blogMediaUrl;

      const { media, ...blogPropertiesInDatabase } = blogProperties;

      handleRequest(
        blogPropertiesInDatabase,
        "post",
        () => {
          setTabIndexStore(tabIndexStoreInitialProperties);
          setBlogProperties(initialBlogProperties);
        },
        `/api/post?collection=blogs&document=${randomBytes(16).toString(
          "hex"
        )}`,
        setModalProps,
        component
      );
    }
  } catch (error) {}
};
