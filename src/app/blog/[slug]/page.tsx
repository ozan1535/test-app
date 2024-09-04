import { Metadata } from "next";
import { useFetchData } from "@/hooks/useFetchData";
import { IParams } from "@/app/types";
import Image from "next/image";

export async function generateMetadata({ params }: IParams): Promise<Metadata> {
  const { singleBlog } = await useFetchData(params.slug);

  return {
    title: `Testarot - ${singleBlog.title}`,
    description: singleBlog.excerpt,
    keywords: ["testarot", singleBlog.title, "blog"],
  };
}

export default async function Page({ params }: IParams) {
  const { singleBlog } = await useFetchData(params.slug);

  return (
    <div>
      <div className="font-bold text-2xl text-center">{singleBlog.title}</div>
      <br />
      <div className="flex justify-center">
        <Image
          src={singleBlog.mediaUrl}
          alt="Featured media"
          width="400"
          height="200"
          sizes="(max-width: 640px) 100vw, 50vw"
          className="w-2/5 h-2/4 pb-2 object-cover"
          priority={false}
        />
      </div>
      <div dangerouslySetInnerHTML={{ __html: singleBlog.content }}></div>
    </div>
  );
}
