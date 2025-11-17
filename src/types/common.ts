export interface APIError {
  code: string;
  message: string;
}

export interface APISuccess<T>{
  success: true;
  data: T;
  error: null;
  timestamp: string;
}

export interface APIFailure{
  success: false;
  data?: null;
  error: APIError;
  timestamp: string;
}

export type APIResponse<T> = APISuccess<T> | APIFailure;