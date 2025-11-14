import type { APIResponse } from "./common";

// 로그인 응답
export interface LoginResponseData {
  accessToken: string;
}


/**
 * 엔드포인트별 타입
 * 
 * 로그인  : LoginResponse
 * 로그아웃 : LogoutResponse
 */

export type LoginResponse = APIResponse<LoginResponseData>;
export type LogoutResponse = APIResponse<string>;



