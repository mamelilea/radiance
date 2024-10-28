import axios from 'axios';
import { API_ENDPOINTS } from './apiEndpoints';

export const login = async (data) => {
  const response = await axios.post(API_ENDPOINTS.LOGIN, data);
  return response.data;
};

export const signup = async (data) => {
  const response = await axios.post(API_ENDPOINTS.SIGNUP, data);
  return response.data;
};


