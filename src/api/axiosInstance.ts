// src/api/axiosInstance.ts

import axios from "axios";
import { clearTokenState, getAccessTokenFromState, setAccessTokenToState} from "../stores/authStore";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true               // refrash token 쿠키 자동 전송
});

// 요청 인터셉터 : 모든 요청에 Access Token 추가
axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = getAccessTokenFromState();

    if(accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터

// 토큰 재발급 요청 진행중 확인
let isRefreshing = false;
// 재발급이 끝나길 기다리는 요청들 쌓아두는 큐
let failedQueue: { resolve: (value?: unknown) => void; reject: (reason?: unknown) => void; }[] = [];

// 토큰 재발급이 끝난 뒤 호출
const processQueue = (error: unknown, token: string | null = null) => {
  failedQueue.forEach(prom => {
    if(error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  // axios 오류, 응답 없을 시 reject
  async (error: unknown) => {
    if(!axios.isAxiosError(error) || !error.response){
      return Promise.reject(error);
    }

    const originalRequest = error.config;

    // 401 오류, 재시도 요청 아닐 때
    if(
      error.response.status === 401 
      && originalRequest 
      && !originalRequest._retry
      && originalRequest.url !== '/api/auth/logout'
    ) {
      // 로그인 또는 회원가입 요청에 대한 401은 토큰 재발급을 시도하지 않고 바로 에러를 반환
      if (originalRequest.url === '/api/auth/login' || originalRequest.url === '/api/auth/signup') {
        return Promise.reject(error);
      }

      // 토큰 재발급 진행중인 경우
      if(isRefreshing){
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        }).then(token => {
          if(originalRequest.headers) {
            originalRequest.headers['Authorization'] = 'Bearer' + token;
          }
          return axiosInstance(originalRequest);
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try{
        // 토큰 재발급 API 호출
        const reissueResponse = await axiosInstance.post('/api/auth/reissue', {});
        const { accessToken: newAccessToken } = reissueResponse.data.data;

        // 새로 발급받은 Access Token 저장
        setAccessTokenToState(newAccessToken);

        // 원래 요청의 헤더를 새 토큰으로 교체
        if(originalRequest.headers) {
          originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
        }

        // 대기열에 있던 모든 요청들을 새 토큰으로 재실행
        processQueue(null, newAccessToken);

        // 실패했던 요청 재실행
        return axiosInstance(originalRequest);

      } catch (reissueError: unknown) {
        // refresh token 도 만료된 경우
        processQueue(reissueError, null);
        // 토큰 클리어
        clearTokenState();
        window.location.href = '/login';
        return Promise.reject(reissueError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
