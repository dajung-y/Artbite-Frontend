// src/api/axiosInstance.ts

import axios from "axios";
import { getAccessTokenFromState} from "../stores/authStore";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000",   // 백엔드 주소
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


export default axiosInstance;
