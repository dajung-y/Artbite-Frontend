import clsx from "clsx";
import type React from "react";
import { FiMenu } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = () => {
  const navigate = useNavigate();

  // 임시
  const handleLogo = () => {
    navigate('/');
  }

  const handleSideBar = () => {
    console.log("사이드바 나옴");
  };

  return (
    <header 
      className={clsx(
        "fixd top-0 left-0 w-full z-30 px-4 pt-10 pb-4 inline-flex justify-between items-end bg-primary"
      )}
    >
      {/* 왼쪽 - 홈 아이콘 */}
      <div className="text-white text-base font-medium"
           onClick={handleLogo}>
        Home Icon
      </div>
      {/* 오른쪽 - 메뉴 버튼 */}
      <div className="w-6 h-6">
        <FiMenu className="w-full h-full text-white"
                onClick={handleSideBar} />
      </div>
    </header>
  );
}
 
export default Header;