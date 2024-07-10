import Link from "next/link";
import { ProfileFavourites } from "./ProfileFavourites.types";

export default function ProfileFavourites({ favourites }: ProfileFavourites) {
  return (
    <div>
      {favourites.map((favourite) => (
        <Link
          href={`/test/${favourite.favouriteId}`}
          className="flex justify-between items-center w-full p-6 bg-white border border-gray-200 rounded-lg shadow cursor-pointer hover:bg-gray-100"
          title="Click to visit this item"
          key={favourite.favouriteId}
        >
          <div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              {favourite.title}
            </h5>
            <p className="font-normal text-gray-700">{favourite.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
