import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import Input from "../Input/Input";
import InputMedia from "../InputMedia/InputMedia";
import { IAddBlog, IBlogProperties } from "./AddBlog.types";
import "react-quill/dist/quill.snow.css";
import Button from "../Button/Button";
import { handleBlogSubmit, initialBlogProperties } from "./AddBlog.helpers";
import RequestFailedMessage from "../RequestFailedMessage/RequestFailedMessage";
import { useAppContext } from "@/app/context";

function AddBlog({ setTabIndexStore }: IAddBlog) {
  const { setModalProps } = useAppContext();

  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );

  const [blogProperties, setBlogProperties] = useState<IBlogProperties>(
    initialBlogProperties
  );

  return (
    <div>
      <Input
        name="title"
        type="text"
        handleFunction={(e) =>
          setBlogProperties((prev) => ({ ...prev, title: e.target.value }))
        }
        value={blogProperties.title}
      />
      <br />
      <div>
        <h1>Blog Content</h1>
        <ReactQuill
          theme="snow"
          value={blogProperties.content}
          onChange={(a) =>
            setBlogProperties((prev) => ({ ...prev, content: a }))
          }
        />
      </div>
      <br />
      <Input
        name="excerpt"
        type="text"
        handleFunction={(e) =>
          setBlogProperties((prev) => ({
            ...prev,
            excerpt: e.target.value,
          }))
        }
        value={blogProperties.excerpt}
      />
      <br />
      <InputMedia
        media={blogProperties.media}
        handleMediaChange={(e) => {
          const { files } = e.target;
          if (!files || files.length === 0) return;

          const file = files[0];
          setBlogProperties((prev) => ({
            ...prev,
            media: file,
          }));
        }}
      />
      <br />
      <Button
        type="submit"
        isButtonSecondary={false}
        name="Add new blog"
        handleFunction={(e) =>
          handleBlogSubmit(
            e,
            blogProperties,
            setModalProps,
            <RequestFailedMessage />,
            setTabIndexStore,
            setBlogProperties
          )
        }
      />
    </div>
  );
}

export default AddBlog;
