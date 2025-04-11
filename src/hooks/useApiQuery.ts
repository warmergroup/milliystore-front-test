import {useQuery} from '@tanstack/vue-query';
import type {UseQueryOptions, QueryKey} from '@tanstack/vue-query';
import api from "../service/api.ts";

interface Params {
  [key: string]: any;
}

export const useApiQuery = <T = any>(
  endpoint: string,
  queryKey: QueryKey,
  params: Params = {},
  options: Partial<UseQueryOptions<T>> = {} // 👈 Xato yo'q, xavfsizroq
) => {
  return useQuery<T>({
    queryKey,
    queryFn: async () => {
      const response = await api.get<T>(endpoint, {params});
      return response.data;
    },
    ...options,
  });
};
