// src/components/common/Header.tsx

import clsx from "clsx";
import type React from "react";
import { FiMenu } from "react-icons/fi";
import { FiBookmark } from "react-icons/fi";
import { FiShare2 } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import { useSidebarStore } from "../../stores/sidebarStore";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const openSidebar = useSidebarStore((state) => state.openSidebar);

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
        "sticky top-0 left-0 w-full z-50",
        "pl-5 pt-6 pr-4 pb-4 inline-flex justify-between items-end",
        "bg-gradient-to-b from-greyscale-900 to-transparent"
      )}
    >
      {/* 왼쪽 : 홈 아이콘 */}
      <div className="flex items-center gap-1 text-greyscale-100"
           onClick={() => navigate('/')}>
        Home Icon
      </div>

      {/* 오른쪽 : 아이콘 */}
      <div className="flex items-center justify-start gap-2.5">
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
          onClick={openSidebar} />
      </div>
    </header>
  );
}
 
export default Header;