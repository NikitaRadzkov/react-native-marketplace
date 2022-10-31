import { create } from 'apisauce';
import cache from '../utility/cache';

const apiClient = create({
  baseURL: 'http://192.168.0.14:9000/api'
});

export default apiClient;