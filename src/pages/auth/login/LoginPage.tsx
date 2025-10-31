import { useState } from "react";
import Button from "../../../components/common/Button";
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage() {

  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // 로그인 함수들
  const handleKakaoLogin = () => {
    console.log("카카오로 로그인");
  }

  const handleNaverLogin = () => {
    console.log("네이버로 로그인");
  }

  const handleGoogleLogin = () => {
    console.log("구글로 로그인");
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    console.log(`로그인 시도 : ${email}, ${password}`);
    navigate('/', {replace: true})
  }

  return (
    <div className="w-full h-full bg-black flex flex-col items-center justify-center p-4 text-white">
      {/* 로고영역 */}
      <div className="p-8 border border-white">
        {/* 임시 텍스트 (이미지로 대체) */}
        <h1 className="text-xl font-bold">(서비스 로고)</h1>
      </div>

      {/* 로그인 컨테이너 */}
      <div className="w-full px-8 space-y-8">

        {/* SNS 로그인 */}
        <div className="space-y-1.5 py-6">
          <Button
            size="large"
            fullWidth
            bgColor="bg-kakao-yellow"
            onClick={handleKakaoLogin}
            >
            카카오로 시작하기
          </Button>
          <Button
            size="large"
            fullWidth
            bgColor="bg-naver-green"
            onClick={handleNaverLogin}
            >
            네이버로 시작하기
          </Button>
          <Button
            size="large"
            fullWidth
            onClick={handleGoogleLogin}
            >
            구글로 시작하기
          </Button>
        </div>

        {/* 구분선 */}
        <div className="border-t border-white" />

        {/* 이메일 로그인 */}
        <div className="pt-6">
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
              
            <Button
              size="large"
              fullWidth
              >
              로그인
            </Button>
          </form>
        </div>

        {/* 하단 링크 버튼 */}
        <div className="flex justify-center gap-4">
          {/* 임시로 모두 회원가입페이지로 이동 */}
          <Link to='/signup' className="text-white text-base font-semibold">
            회원가입
          </Link>
          <Link to='/signup' className="text-white text-base font-semibold">
            아이디 찾기
          </Link>

        </div>
      </div>
    </div>
  )
}
