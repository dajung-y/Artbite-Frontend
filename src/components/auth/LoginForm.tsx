// src/components/auth/LoginForm.tsx
// 일반 로그인 폼 입력

import { useEffect, useState } from "react";
import useAuthStore, { setAccessTokenToState } from "../../stores/authStore";
import { useNavigate } from "react-router-dom";
import { loginSchema } from "../../schemas/loginSchema";
import axiosInstance from "../../api/axiosInstance";
import axios from "axios";
import Button from "../common/Button";
import type { LoginResponse } from "../../types/auth";

export default function LoginForm() {

  const navigate = useNavigate();
  const { accessToken } = useAuthStore();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (accessToken) {
      navigate('/', { replace: true });
    }
  }, [accessToken, navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    // 입력값 검사
    const result = loginSchema.safeParse({ email, password });

    if(!result.success){
      const firstError = result.error.issues[0];
      setError(firstError.message);
      return;
    }

    try{
      const response = await axiosInstance.post<LoginResponse>("/api/auth/login", {email, password});

      if(!response.data.success || !response.data.data){
        throw new Error(response.data.error?.message || "로그인 실패");
      }
      const { accessToken } =response.data.data;
      setAccessTokenToState(accessToken);
      navigate("/", {replace: true});

    } catch(err: unknown) {
      console.error("Login error:", err); // Log the entire error object
      if(axios.isAxiosError(err) && err.response){
        console.log("Login error response data:", err.response);
        if (err.response.status === 401) {
          setError("이메일 또는 비밀번호가 일치하지 않습니다");
        } else {
          setError(err.response.data?.error?.message || "로그인 중 오류가 발생했습니다");
        }
      } else {
        setError("로그인 중 알 수 없는 오류가 발생했습니다");
      }
    }
  }
  return (
    <div>
      {/* 입력폼 + 로그인버튼 */}
      <form onSubmit={handleLogin} className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-5 py-3.5 rounded-lg bg-greyscale-600 placeholder-greyscale-400 text-greyscale-200 text-body focus:outline focus:outline-greyscale-400" />
          
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-5 py-3.5 rounded-lg bg-greyscale-600 placeholder-greyscale-400 text-greyscale-200 text-body focus:outline focus:outline-greyscale-400" />

        {/* 에러 메시지 */}
        {error && (
          <div className="flex justify-center py-1">
            <p className="text-caption text-red-400">{error}</p>
          </div>
        )}
        <Button
          variant="secondary"
          fullWidth
          type="submit"
          >
          로그인
        </Button>
      </form>
    </div>
  )
}
