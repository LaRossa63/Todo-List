import { useQuery } from 'react-query';

import { KeyApi } from 'types/types';
import { ChartService } from './Todo.service';

export const useGetChart = () => {
  return useQuery({
    queryKey: KeyApi.TODO_LIST,
    queryFn: ChartService.getChart,
  });
};
