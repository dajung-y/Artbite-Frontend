import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"
import { setAccessTokenToState } from "../../stores/authStore";

export default function OAuth2RedirectPage() {
  const navigate = useNavigate();
  const hasProcessedToken = useRef(false);

  useEffect(() => {
    if(hasProcessedToken.current) {
      return;
    }

    const urlParams = new URLSearchParams(window.location.search);
    const accessToken = urlParams.get('accessToken');

    if(accessToken) {
      hasProcessedToken.current = true;

      // URL에서 토큰 정보 제거
      window.history.replaceState({}, document.title, window.location.pathname);

      // access token 저장
      setAccessTokenToState(accessToken);

      navigate('/', { replace: true });
    } else if(window.location.search.includes('error')) {
      // 백엔드에서 에러 보낸 경우
      navigate('/login', { replace: true });
    } else if(!hasProcessedToken.current) {
      // 토큰 없는 경우
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <p>로그인 처리 중...</p>
    </div>
  )
}
