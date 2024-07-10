import { Metadata } from "next";
import TestItems from "@/components/TestItems/TestItems";
import { serverAuth } from "../../../../auth";
import { useFetchTestData } from "@/hooks/useFetchTestData";
import { IParams } from "@/app/types";
import { generateFolderName, getData } from "@/helpers/helpers";

export async function generateMetadata({ params }: IParams): Promise<Metadata> {
  const tests = await getData("tests");
  const singleTest = tests.find(
    (test) => generateFolderName(test.title) === params.slug
  );
  return {
    title: `Testarot - ${singleTest.title}`,
    description: singleTest.description,
    keywords: [
      "testarot",
      singleTest.title,
      singleTest.category,
      "tests",
      "fun",
    ],
  };
}

export default async function Page({ params }: IParams) {
  const session = await serverAuth();

  const { singleTest, commentsValues, emojiReactions, isCurrentTestFavourite } =
    await useFetchTestData(params.slug, session?.user?.email);

  return (
    <div className="w-full grid justify-center px-4 justify-items-center gap-1">
      <div className="w-full grid justify-center">
        <h4 className="text-2xl font-bold">{singleTest.title}</h4>
        <br />
        <p className="text-gray-500">{singleTest.description}</p>
        <br />
        <TestItems
          questions={singleTest.questions}
          results={singleTest.results}
          title={singleTest.title}
          mainMediaUrl={singleTest.mainMediaUrl}
          description={singleTest.description}
          comments={commentsValues}
          emojiReactions={emojiReactions}
          isCurrentTestFavourite={isCurrentTestFavourite}
        />
      </div>
    </div>
  );
}
