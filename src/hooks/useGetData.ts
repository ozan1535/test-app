import useSWR from "swr";

export default function useGetData(
  slug?: string,
  singleItemSlug?: string,
  shouldFetchSingleItem?: boolean
) {
  const fetcher = (
    ...args: [input: RequestInfo, init?: RequestInit | undefined]
  ) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading, mutate } = useSWR(
    `/api/get?collection=${slug}&singleItemSlug=${singleItemSlug}&shouldFetchSingleItem=${shouldFetchSingleItem}`,
    fetcher
  );

  return { data, error, isLoading, mutate };
}
