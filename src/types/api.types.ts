// API Response Types
export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

// ASP.NET Core ProblemDetails format (RFC 9110)
export interface ProblemDetails {
  type?: string;
  title: string;
  status: number;
  detail?: string;
  errors?: Record<string, string[]>;
}

export interface ApiError {
  message: string;
  statusCode: number;
  errors?: Record<string, string[]>;
  problemDetails?: ProblemDetails;
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
