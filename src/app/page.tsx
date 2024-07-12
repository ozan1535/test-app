import Card from "@/components/Card/Card";
import Widget from "@/components/Widget/Widget";
import { getData } from "@/helpers/helpers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testarot - Home",
  description:
    "Explore the Most Engaging and Up-to-Date Tests on Testarot. Dive into a variety of categories including personal tests, relationship tests, and more. Enjoy a seamless experience with no overwhelming ads and discover insights about yourself through our unbiased and diverse content. Testarot, Your Destination for Fun and Insightful Tests.",
  keywords: [
    "testarot",
    "tests",
    "blogs",
    "fun",
    "personal tests",
    "relationship tests",
  ],
};

export default async function Home() {
  const tests = await getData("tests");
  console.log(tests, 123)
  return (
    <>
      <Widget media="/test-emoji.svg" title="Tests" />
      <div className="w-full px-2 grid grid-cols-1 md:grid-cols-2	gap-3">
        {tests.map((test, index) => (
          <Card test={test} key={test.key + index} />
        ))}
      </div>
    </>
  );
}
