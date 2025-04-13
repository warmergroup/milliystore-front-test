import {useQuery} from '@tanstack/vue-query';
import type {UseQueryOptions, QueryKey} from '@tanstack/vue-query';
import api from "../service/api.ts";

// `useApiQuery` hook
export const useApiQuery = <T = any>(
  endpoint: string,
  queryKey: QueryKey,
  params: Record<string, any> = {},
  options: Partial<UseQueryOptions<T>> = {}
) => {
  return useQuery<T>({
    queryKey: [endpoint, params, ...queryKey], // 🔁
    queryFn: async ({queryKey}) => {
      const [_endpoint, _params] = queryKey as [string, Record<string, any>];
      const response = await api.get<T>(_endpoint, {params: _params});
      return response.data;
    },
    ...options,
  });
};
