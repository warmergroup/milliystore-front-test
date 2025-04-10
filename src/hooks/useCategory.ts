import { useApiQuery } from './useApiQuery.js';

export const useCategories = () => {
  return useApiQuery('categories', ['categories']);
};  