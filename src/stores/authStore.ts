import { create } from 'zustand';

interface AuthState {
    accessToken: string | null;
    setAccessToken: (token: string | null) => void;
    clearAuth: () => void;
}

const ACCESS_TOKEN_KEY = 'accessToken';

const useAuthStore = create<AuthState>((set) => ({
    accessToken: localStorage.getItem(ACCESS_TOKEN_KEY),
    setAccessToken: (token) => {
        set({ accessToken: token });
        if (token) {
            localStorage.setItem(ACCESS_TOKEN_KEY, token);
        } else {
            localStorage.removeItem(ACCESS_TOKEN_KEY);
        }
    },
    clearAuth: () => {
        set({ accessToken: null });
        localStorage.removeItem(ACCESS_TOKEN_KEY);
    },
}));

export const getAccessTokenFromState = (): string | null => {
    return useAuthStore.getState().accessToken;
};

export const setAccessTokenToState = (token: string) => {
    useAuthStore.getState().setAccessToken(token);
};

export const clearTokenState = () => {
    useAuthStore.getState().clearAuth();
};

export default useAuthStore;
