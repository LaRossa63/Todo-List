import { Axios } from 'api';

export const ChartService = {
  async getChart() {
    return Axios.get('');
  },
};
