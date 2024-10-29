import axios from 'axios';
import { API_ENDPOINTS } from './apiEndpoints';

export const login = async (data) => {
  const response = await axios.post(API_ENDPOINTS.LOGIN, data);
  return response.data;
};

export const register = async (data) => {
  const response = await axios.post(API_ENDPOINTS.REGISTER, data);
  return response.data;
};


