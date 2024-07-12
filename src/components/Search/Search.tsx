import Image from "next/image";
import { ISearchComponent } from "./Search.types";

export default function Search({
  setSearchValue,
  handleFunction,
}: ISearchComponent) {
  return (
    <form className="w-full mx-auto px-2">
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <Image src="/search.svg" width={20} height={20} alt="Search icon" />
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search..."
          onChange={(e) => setSearchValue(e.target.value)}
          required
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
          onClick={handleFunction}
        >
          Search
        </button>
      </div>
    </form>
  );
}
