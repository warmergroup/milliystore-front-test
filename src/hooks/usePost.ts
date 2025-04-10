import { useApiQuery } from './useApiQuery.js';

export const usePosts = (params = {}) => {
  return useApiQuery('posts', ['posts', params], params);
};