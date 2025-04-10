import { useQuery } from '@tanstack/vue-query';
import api from "../service/api.ts";

export const useApiQuery = (endpoint, queryKey, params = {}, options = {}) => {
  return useQuery({
    queryKey,
    queryFn: async () => {
      const response = await api.get(endpoint, { params });
      return response.data; // API dan kelgan ma'lumotni qaytaradi
    },
    ...options, // Vue Query uchun qo'shimcha opsiyalar
  });
};