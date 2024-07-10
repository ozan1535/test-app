import { Metadata } from "next";
import Card from "@/components/Card/Card";
import { generateFolderName, getData } from "@/helpers/helpers";
import { testCategories } from "@/components/Header/headerItems";
import { IParams } from "@/app/types";

export async function generateMetadata({ params }: IParams): Promise<Metadata> {
  const testCategorie = testCategories.find(
    (category) => generateFolderName(category.name) === params.slug
  );
  return {
    title: `Testarot - ${testCategorie?.name || ""}`,
    description:
      "Explore the Most Engaging and Up-to-Date Tests on Testarot. Dive into a variety of categories including personal tests, relationship tests, and more. Enjoy a seamless experience with no overwhelming ads and discover insights about yourself through our unbiased and diverse content. Testarot, Your Destination for Fun and Insightful Tests.",
    keywords: ["testarot", "tests", "blogs", "fun", testCategorie?.name || ""],
  };
}

export default async function Page({ params }: IParams) {
  const tests = (await getData("tests")) as any;
  const filteredTests = tests.filter((test) => test.category === params.slug);
  return (
    <div className="w-full px-2 grid grid-cols-1 md:grid-cols-2	gap-3">
      {filteredTests.map((test, index) => (
        <Card test={test} key={test.category + index} />
      ))}
    </div>
  );
}
