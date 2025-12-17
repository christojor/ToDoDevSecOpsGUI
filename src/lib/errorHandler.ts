import type { ProblemDetails, ApiError } from '../types/api.types';
import { AxiosError } from 'axios';

export function parseProblemDetails(data: unknown): ProblemDetails | null {
  if (data && typeof data === 'object' && 'status' in data && 'title' in data) {
    return data as ProblemDetails;
  }
  return null;
}

export function formatValidationErrors(errors: Record<string, string[]>): string {
  const messages: string[] = [];
  
  for (const [field, fieldErrors] of Object.entries(errors)) {
    if (Array.isArray(fieldErrors) && fieldErrors.length > 0) {
      messages.push(`${field}: ${fieldErrors.join(', ')}`);
    }
  }
  return messages.join('\n');
}

export function getErrorMessage(error: unknown): string {
  if (error instanceof AxiosError) {
    const problemDetails = parseProblemDetails(error.response?.data);
    
    if (problemDetails) {
      if (problemDetails.errors && Object.keys(problemDetails.errors).length > 0) {
        return formatValidationErrors(problemDetails.errors);
      }
      return problemDetails.detail || problemDetails.title || 'An error occurred';
    }
    
    if (error.response?.data?.message) {
      return error.response.data.message;
    }
    
    if (error.response?.status) {
      switch (error.response.status) {
        case 400:
          return 'Invalid request. Please check your input.';
        case 401:
          return 'Unauthorized. Please log in.';
        case 403:
          return 'You do not have permission to perform this action.';
        case 404:
          return 'Resource not found.';
        case 500:
          return 'Internal server error. Please try again later.';
        default:
          return error.message || 'An unexpected error occurred';
      }
    }
    
    if (error.code === 'ERR_NETWORK' || error.message.includes('Network Error')) {
      return 'Network Error: Unable to connect to the server';
    }
    
    return error.message || 'An unexpected error occurred';
  }
  
  if (error instanceof Error) {
    return error.message;
  }
  
  return 'An unexpected error occurred';
}

export function toApiError(error: unknown): ApiError {
  if (error instanceof AxiosError) {
    const problemDetails = parseProblemDetails(error.response?.data);
    
    return {
      message: getErrorMessage(error),
      statusCode: error.response?.status || 0,
      errors: problemDetails?.errors,
      problemDetails: problemDetails || undefined,
    };
  }
  
  return {
    message: getErrorMessage(error),
    statusCode: 0,
  };
}
