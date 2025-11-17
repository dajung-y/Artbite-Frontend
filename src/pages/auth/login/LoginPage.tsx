import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import useAuthStore from "../../../stores/authStore";
import SocialLoginButtons from "../../../components/auth/SocialLoginButtons";
import Header from "../../../components/common/Header";
import LoginForm from "../../../components/auth/LoginForm";
import { ReactComponent as LogoIcon } from "@/assets/logos/resource-logo-text.svg"

export default function LoginPage() {

  const navigate = useNavigate();
  const { accessToken } = useAuthStore();
  const [showEmailLogin, setShowEmailLogin] = useState<boolean>(false);

  useEffect(() => {
    if (accessToken) {
      navigate('/', { replace: true });
    }
  }, [accessToken, navigate]);


  return (
    <div className="relative w-full h-full bg-greyscale-900 flex flex-col items-center">
      <Header />

      {/* 로고영역 */}
      <div className="flex-1 flex flex-col justify-center items-center">
        <h3 className="text-title3 text-greyscale-100">생각이 튀는 순간</h3>
        <LogoIcon className="w-full" />
      </div>

      {/* 로그인 컨테이너 */}
      <div className="w-full px-5 pb-12">
        {showEmailLogin ? ( 
          <>

          <LoginForm />

          <div className="pt-8 flex justify-center items-center gap-4">
            <Link to="/signup" className="text-caption text-greyscale-200">회원가입</Link>
            <div className="w-0 h-3.5 outline outline-1 outline-offset-[-0.5px] outline-greyscale-600" />
            <button
              onClick={() => setShowEmailLogin(false)}
              className="text-caption text-greyscale-200">
              아이디 찾기
            </button>
          </div>

          
          </>
        ) : (
          <>

          <SocialLoginButtons />

          {/* 로그인폼 전환 버튼 */}
          <div className="pt-8 flex justify-center items-center">
            <button
              onClick={() => setShowEmailLogin(true)}
              className="text-caption text-greyscale-200">
              이메일로 로그인하기
            </button>
          </div>
        </>
        )}

      </div>
    </div>
  )
}
