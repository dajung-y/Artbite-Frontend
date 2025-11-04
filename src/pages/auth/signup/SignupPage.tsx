import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../../api/axiosInstance";
import Button from "../../../components/common/Button";
import * as axios from "axios";
import useAuthStore from "../../../stores/authStore";
import { signupSchema } from "../../../schemas/signupSchema";
import z from "zod";

export default function SignupPage() {
  const navigate = useNavigate();
  const { accessToken } = useAuthStore();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [usernameError, setUsernameError] = useState<string>("");
  const [generalError, setGeneralError] = useState<string>("");

  useEffect(() => {
    if (accessToken) {
      navigate('/', { replace: true });
    }
  }, [accessToken, navigate]);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");
    setUsernameError("");
    setGeneralError("");

    try {
      signupSchema.parse({ email, password, username });

      await axiosInstance.post('/api/auth/signup', { email, password, username });
      
      alert("회원가입이 완료되었습니다! 로그인 페이지로 이동합니다.");
      navigate('/login', { replace: true });

    } catch (err: unknown) {
      if (err instanceof z.ZodError) {
        err.errors.forEach((error) => {
          if (error.path[0] === "email") setEmailError(error.message);
          if (error.path[0] === "password") setPasswordError(error.message);
          if (error.path[0] === "username") setUsernameError(error.message);
        });
      } else if (axios.isAxiosError(err) && err.response) {
        setGeneralError(err.response.data?.error?.message || "회원가입 중 오류가 발생했습니다.");
      } else {
        setGeneralError("회원가입 중 알 수 없는 오류가 발생했습니다.");
      }
      console.error("회원가입 실패:", err);
    }
  };

  return (
    <div className="w-full h-full bg-black flex flex-col items-center justify-center p-4 text-white">
      {/* 로고영역 */}
      <div className="p-8 border border-white">
        {/* 임시 텍스트 (이미지로 대체) */}
        <h1 className="text-xl font-bold">(서비스 로고)</h1>
      </div>

      {/* 회원가입 컨테이너 */}
      <div className="w-full px-8 space-y-8">
        <div className="pt-6">
          <form onSubmit={handleSignup} className="space-y-1.5">
            <input
              type="email"
              placeholder="이메일"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError("");
              }}
              className="w-full px-6 py-3.5 rounded-md bg-[#2F2F2F] placeholder-white text-white font-semibold focus:outline focus:outline-white" />
            {emailError && <p className="text-red-500 text-sm text-left px-1">{emailError}</p>}
            
            <input
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError("");
              }}
              className="w-full px-6 py-3.5 rounded-md bg-[#2F2F2F] placeholder-white text-white font-semibold focus:outline focus:outline-white" />
            {passwordError && <p className="text-red-500 text-sm text-left px-1">{passwordError}</p>}
            
            <input
              type="text"
              placeholder="사용자 이름"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                setUsernameError("");
              }}
              className="w-full px-6 py-3.5 rounded-md bg-[#2F2F2F] placeholder-white text-white font-semibold focus:outline focus:outline-white" />
            {usernameError && <p className="text-red-500 text-sm text-left px-1">{usernameError}</p>}
              
            {generalError && <p className="text-red-500 text-sm text-center">{generalError}</p>}

            <Button
              size="large"
              fullWidth
              type="submit"
              >
              회원가입
            </Button>
          </form>
        </div>

        {/* 하단 링크 버튼 */}
        <div className="flex justify-center gap-4">
          <Link to='/login' className="text-white text-base font-semibold">
            로그인
          </Link>
        </div>
      </div>
    </div>
  );
}