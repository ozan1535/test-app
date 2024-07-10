import Link from "next/link";
import { testCategories } from "./headerItems";
import { generateFolderName } from "@/helpers/helpers";

export default function HeaderDropdown() {
  return (
    <ul className="absolute hidden group-hover:block left-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
      {testCategories.map((item) => (
        <li className="py-1" key={item.name}>
          <Link
            href={`/category/${generateFolderName(item.name)}`}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
