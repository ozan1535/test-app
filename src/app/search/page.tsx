"use client";
import { useState } from "react";
import Card from "@/components/Card/Card";
import Search from "@/components/Search/Search";
import { handleSearchFunction } from "@/helpers/helpers";
import useGetData from "@/hooks/useGetData";
import { IFormItems } from "../types";

export default function Page() {
  const [searchValue, setSearchValue] = useState("");
  const [items, setItems] = useState<IFormItems[]>([]);

  const { data } = useGetData("tests");

  return (
    <>
      <Search
        setSearchValue={setSearchValue}
        handleFunction={(e) =>
          handleSearchFunction(e, data, searchValue, setItems)
        }
      />
      <br />
      {items.length ? (
        <div className="w-full px-2 grid grid-cols-1 md:grid-cols-2	gap-3">
          {items.map((item, index) => (
            <Card
              type="test"
              title={item.title}
              mediaUrl={item.mainMediaUrl}
              excerpt={item.description}
              category={item.category}
              key={item.category + index}
            />
          ))}
        </div>
      ) : (
        <p className="px-2">There is nothing to show here now.</p>
      )}
    </>
  );
}
