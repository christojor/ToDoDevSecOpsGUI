// API Response Types
export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

export interface ApiError {
  message: string;
  statusCode: number;
  errors?: Record<string, string[]>;
}

export interface Todo {
  id: string;
  name: string;
  isComplete: boolean;
}

export interface CreateTodoDto {
  name: string;
  isComplete?: boolean;
}

export interface UpdateTodoDto {
  name?: string;
  isComplete?: boolean;
}
