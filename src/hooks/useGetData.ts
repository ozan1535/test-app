import { fetcher } from "@/helpers/helpers";
import useSWR from "swr";

export default function useGetData(
  slug?: string,
  singleItemSlug?: string,
  shouldFetchSingleItem?: boolean
) {

  const { data, error, isLoading, mutate } = useSWR(
    `/api/get?collection=${slug}&singleItemSlug=${singleItemSlug}&shouldFetchSingleItem=${shouldFetchSingleItem}`,
    fetcher
  );

  return { data, error, isLoading, mutate };
}
