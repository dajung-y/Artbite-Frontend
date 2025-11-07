import { useState, useEffect } from "react";
import Button from "../../../components/common/Button";
import { Link, useNavigate } from "react-router-dom";
import { loginSchema } from "../../../schemas/loginSchema";
import axiosInstance from "../../../api/axiosInstance";
import { setAccessTokenToState } from "../../../stores/authStore";
import axios from "axios";
import useAuthStore from "../../../stores/authStore";
import SocialLoginButtons from "../../../components/auth/SocialLoginButtons";

export default function LoginPage() {

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
      const response = await axiosInstance.post("/api/auth/login", {email, password});
      const { accessToken } =response.data.data;
      setAccessTokenToState(accessToken);

      navigate("/", {replace: true});
    } catch(err: unknown) {
      console.error("Login error:", err); // Log the entire error object
      if(axios.isAxiosError(err) && err.response){
        console.log("Login error response data:", err.response.data);
        if (err.response.status === 401) {
          setError("이메일 또는 비밀번호가 일치하지 않습니다");
        } else {
          setError(err.response.data?.error?.message || "이메일 또는 비밀번호가 일치하지 않습니다");
        }
      } else {
        setError("로그인 중 알 수 없는 오류가 발생했습니다");
      }
    }
  }

  return (
    <div className="w-full h-full bg-black flex flex-col items-center justify-center text-white">
      {/* 로고영역 */}
      <div className="p-8">
        {/* 임시 텍스트 (이미지로 대체) */}
        <h1 className="text-xl font-bold">메인 텍스트</h1>
      </div>

      {/* 로그인 컨테이너 */}
      <div className="w-full px-5 space-y-16">

        {/* SNS 로그인 */}
        <SocialLoginButtons />

        {/* 이메일 로그인 */}
        <div>
          <form onSubmit={handleLogin} className="space-y-1.5">
            <input
              type="text"
              placeholder="이메일"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-6 py-3.5 rounded-md bg-[#2F2F2F] placeholder-white text-white font-semibold focus:outline focus:outline-white" />
              
            <input
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-6 py-3.5 rounded-md bg-[#2F2F2F] placeholder-white text-white font-semibold focus:outline focus:outline-white" />

            {/* 에러 메시지 */}
            {error && (
              <div className="flex justify-center py-1">
                <p className="text-sm text-red-500">{error}</p>
              </div>
            )}
            <Button
              variant="secondary"
              size="large"
              fullWidth
              >
              로그인
            </Button>
          </form>
        </div>

        {/* 하단 링크 버튼 */}
        <div className="flex justify-center items-center gap-4">
          <Link
            to="/signup"
            className="text-gray-300 text-sm font-normal font-['Pretendard'] leading-5"
          >
            회원가입
          </Link>

          {/* 구분선 */}
          <div className="w-0 h-3.5 outline outline-1 outline-offset-[-0.5px] outline-neutral-700" />

          <Link
            to="/signup"
            className="text-gray-300 text-sm font-normal font-['Pretendard'] leading-5"
          >
            아이디 찾기
          </Link>
        </div>

      </div>
    </div>
  )
}
