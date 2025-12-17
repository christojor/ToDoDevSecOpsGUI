import axios from 'axios';
import { getErrorMessage, parseProblemDetails } from './errorHandler';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'https://localhost:5001/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.response.use(
  (response) => {
    if (import.meta.env.DEV) {
      console.log('API Response:', response.status, response.config.url);
    }
    return response;
  },
  (error) => {
    if (error.response) {
      const problemDetails = parseProblemDetails(error.response.data);
      
      if (import.meta.env.DEV) {
        console.error('API Error:', {
          status: error.response.status,
          url: error.config?.url,
          problemDetails,
          data: error.response.data,
        });
      }
      
      // Log user-friendly error message
      const message = getErrorMessage(error);
      console.error(`Error (${error.response.status}):`, message);
      
    } else if (error.request) {
      console.error('No response received:', error.request);
    } else {
      console.error('Error:', error.message);
    }
    
    return Promise.reject(error);
  }
);

export default apiClient;
