// src/stores/authStore.ts

import { create } from "zustand";

interface AuthState {
  accessToken: string | null;
  setAccessToken: (token: string) => void;
  isLoggedIn: boolean;
  clearToken: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({

  accessToken: localStorage.getItem('accessToken') || null,
  // 토큰 저장
  setAccessToken: (token) => {
    set({ accessToken: token });
    localStorage.setItem('accessToken', token);
  },
  isLoggedIn: false,
  // 로그아웃
  clearToken: () => {
    set({ accessToken: null });
    localStorage.removeItem('accessToken')
  },
}));

// zustand에 저장된 accessToken 읽어오는 함수
const getAccessTokenFromState = (): string | null => {
  return useAuthStore.getState().accessToken;
};

// accessToken을 zustand에 저장하는 함수
const setAccessTokenToState = (token: string) => {
  return useAuthStore.getState().setAccessToken(token);
};

// 로그아웃 or 토큰만료
const clearTokenState = () => {
  useAuthStore.getState().clearToken();
};

export {getAccessTokenFromState, setAccessTokenToState, clearTokenState};

