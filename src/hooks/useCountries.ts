  import { useApiQuery } from './useApiQuery.js';

  export const useCountries = () => {
    return useApiQuery('cities', ['cities']);
  };