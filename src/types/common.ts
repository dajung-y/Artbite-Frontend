export interface APIError {
  code: string;
  message: string;
}

export interface APIResponse<T> {
  success: boolean;
  data: T | null;
  error: APIError | null;
  timestamp: string;
}