import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../api/axiosInstance';
import { clearTokenState } from '../../stores/authStore';
import Button from './Button';

const LogoutButton: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await axiosInstance.post('/api/auth/logout', {});
      
      clearTokenState(); // 모든 로컬 인증 상태 초기화

      const socialLogoutUrl = response.data.data;
      if (socialLogoutUrl) {
        // 소셜 로그아웃 URL이 있으면 해당 주소로 리다이렉트
        window.location.href = socialLogoutUrl;
      } else {
        // 없으면 로그인 페이지로 이동
        navigate('/login', { replace: true });
      }

    } catch (error: unknown) {
      // 에러가 발생하더라도 로컬 상태는 모두 지우고 로그인 페이지로 보냄
      clearTokenState();
      navigate('/login', { replace: true });
    }
  };

  return (
    <Button onClick={handleLogout} size="md" bgColor="bg-red-500">
      로그아웃
    </Button>
  );
};

export default LogoutButton;
