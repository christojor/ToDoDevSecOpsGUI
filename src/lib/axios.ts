import axios from 'axios';

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
      switch (error.response.status) {
        // case 401:
        //   console.error('Unauthorized access');
        //   break;
        case 403:
          console.error('You do not have permission to perform this action');
          break;
        case 404:
          console.error('The resource could not be found');
          break;
        case 500:
          console.error('Internal Server Error');
          break;
        default:
          console.error('API Error:', error.response.status, error.response.data);
      }
    } else if (error.request) {
      console.error('No response received:', error.request);
    } else {
      console.error('Error:', error.message);
    }
    
    return Promise.reject(error);
  }
);

export default apiClient;
