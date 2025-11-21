import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../../api/axiosInstance";
import Button from "../../../components/common/Button";
import * as axios from "axios";
import useAuthStore from "../../../stores/authStore";
import { signupSchema } from "../../../schemas/signupSchema";
// import { toast } from "react-hot-toast"
import Header from "../../../components/common/Header";
// import Toast from "../../../components/common/CustomToast";
import { ReactComponent as LogoIcon } from "@/assets/logos/resource-logo-text.svg"
import { showToast } from "../../../utils/toast";


export default function SignupPage() {
  const navigate = useNavigate();
  const { accessToken } = useAuthStore();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [error, setError] = useState<String | null>(null);

  useEffect(() => {
    if (accessToken) {
      navigate('/', { replace: true });
    }
  }, [accessToken, navigate]);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const result = signupSchema.safeParse({email, password, username});
    if(!result.success){
      const firstError = result.error.issues[0];
      setError(firstError.message);
      return;
    }

    try {
      await axiosInstance.post('/api/auth/signup', { email, password, username });

      showToast("회원가입을 완료했어요")

      setTimeout(() => {
        navigate('/login', { replace: true });
      },2000);
      
    } catch (err: unknown) {
      console.error("회원가입 실패:", err);

      if(axios.isAxiosError(err) && err.response) {
        setError(err.response.data?.error?.message || "회원가입 중 오류가 발생했습니다");
      } else {
        setError("회원가입 중 알 수 없는 오류가 발생했습니다");
      }
    }
  };

  return (
    <div className="relative w-full h-full bg-greyscale-900 flex flex-col items-center">
      <Header />

      {/* 로고영역 */}
      <div className="flex-1 flex flex-col justify-center items-center">
        <h3 className="text-title3 text-greyscale-100">생각이 튀는 순간</h3>
        <LogoIcon className="w-full" />
      </div>

      {/* 회원가입 컨테이너 */}
      <div className="w-full px-5 pb-12">
        <form onSubmit={handleSignup} className="flex flex-col gap-3">
          <input
            type="email"
            placeholder="이메일"
            value={email}
            onChange={ (e) => setEmail(e.target.value)}
            className="w-full px-5 py-3.5 rounded-lg bg-greyscale-600 placeholder-greyscale-400 placeholder:text-body1 text-greyscale-200 text-body focus:outline focus:outline-greyscale-400" />

          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-5 py-3.5 rounded-lg bg-greyscale-600 placeholder-greyscale-400 placeholder:text-body1 text-greyscale-200 text-body focus:outline focus:outline-greyscale-400" />

          <input
            type="text"
            placeholder="사용자 이름"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-5 py-3.5 rounded-lg bg-greyscale-600 placeholder-greyscale-400 placeholder:text-body1 text-greyscale-200 text-body focus:outline focus:outline-greyscale-400" />

          {/* 에러 메시지 */}
          {error && (
            <div className="flex justify-center py-1">
              <p className="text-caption text-red-400">{error}</p>
            </div>
          )}

          <Button
            fullWidth
            type="submit"
            disabled={!email || !password || !username}
            >
            회원가입
          </Button>
        </form>

        {/* 로그인 버튼 */}
        
        <Link
          to='/login'
          className="pt-8 flex items-center justify-center text-caption text-greyscale-200">
          로그인
        </Link>
      </div>
    </div>
  );
}