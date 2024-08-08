import { TApiError, TApiResponse, TLiveData } from "@/types/api.types";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

const getLiveData = async (): Promise<TApiResponse<TLiveData>> => {
  const requestOptions = {
    method: "GET",
    headers: {
      'content-type': 'application/json',
      'authorization': `Bearer ${process.env.NEXT_PUBLIC_AUTH_TOKEN as string}`,
    },
    cache: "no-cache" as RequestCache,
  };

  const response = await fetch('/proxy-api/get', requestOptions);

  const data = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return data;
};

type Params = {
  enabled?: boolean;
  refetchInterval?: number;
};

const useGetLiveData = ({
  enabled = true,
  refetchInterval = 5000,
}: Params): UseQueryResult<TApiResponse<TLiveData>, TApiError> => {
  return useQuery<TApiResponse<TLiveData>, TApiError>({
    queryKey: ["get-live-data"],
    queryFn: () => getLiveData(),
    enabled,
    refetchInterval,
    // stale timer has been set to refetch interval -10. So if same
    // hook is used within multiple components, it will refetch
    // only once and other occurrences will use the cached data
    staleTime: refetchInterval - 10,
  });
};

export default useGetLiveData;
