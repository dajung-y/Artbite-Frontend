// src/layouts/Header.tsx

import clsx from "clsx";
import type React from "react";
import { FiMenu } from "react-icons/fi";
import { FiBookmark } from "react-icons/fi";
import { FiShare2 } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";

interface HeaderProps {
  className?: string;
  onMenuClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const showMoreIcons = location.pathname === '/today';

  // 공유 버튼
  const handleShare = () => {
    console.log("공유 버튼 클릭");
  };

  // 북마크 버튼
  const handleBookmark = () => {
    console.log("북마크 버튼 클릭");
  };

  return (
    <header 
      className={clsx(
        "sticky top-0 left-0 w-full z-30 px-4 pt-10 pb-4 inline-flex justify-between items-end bg-primary"
      )}
    >
      {/* 왼쪽 : 홈 아이콘 */}
      <div className="text-white text-base font-medium"
           onClick={() => navigate('/')}>
        Home Icon
      </div>

      {/* 오른쪽 : 아이콘 */}
      <div className="flex items-center gap-2">
        { showMoreIcons && (
          <>
            <FiShare2 
              className="w-6 h-6 text-white" 
              onClick={handleShare} />
            <FiBookmark
              className="w-6 h-6 text-white"
              onClick={handleBookmark} />
          </>
        )}

        <FiMenu 
          className="w-6 h-6 text-white"
          onClick={onMenuClick} />
      </div>
    </header>
  );
}
 
export default Header;