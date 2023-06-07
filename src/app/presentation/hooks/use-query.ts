import { useLocation } from 'react-router-dom';

export const useQuery = () => {
  const searctParams = new URLSearchParams(useLocation().search);
  return searctParams;
};
