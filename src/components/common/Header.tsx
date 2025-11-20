// src/components/common/Header.tsx

import clsx from "clsx";
import type React from "react";

import { ReactComponent as MemuIcon } from "@/assets/icons/icon-menu.svg";
import { ReactComponent as BookmarkIcon } from "@/assets/icons/icon-bookmark.svg";
import { ReactComponent as ShareIcon } from "@/assets/icons/icon-share.svg";
import { ReactComponent as LogoIcon } from "@/assets/resources/resource-logo-icon.svg"

import { useLocation, useNavigate } from "react-router-dom";
import { useSidebarStore } from "../../stores/sidebarStore";
import { BookmarkApi } from "../../api/bookmarkApi";

interface HeaderProps {
  className?: string;
  noteId?: number;
}

const Header: React.FC<HeaderProps> = ( {noteId} ) => {
  const navigate = useNavigate();
  const location = useLocation();

  const openSidebar = useSidebarStore((state) => state.openSidebar);

  const showMoreIcons = location.pathname === '/today' || location.pathname.startsWith('/today/');

  // 공유 버튼
  const handleShare = () => {
    console.log("공유 버튼 클릭");
  };

  // 북마크 버튼
  const handleBookmark = async () => {
    if(!noteId) return;

    try{
      const res = await BookmarkApi.postBookmarkToggle(noteId);
    } catch(err: any){
      console.error("북마크 토글 실패", err);
    }
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
      <div className="w-22 h-6"
           onClick={() => navigate('/')}>
        <LogoIcon className="w-full h-full" />
      </div>

      {/* 오른쪽 : 아이콘 */}
      <div className="flex items-center justify-start gap-2.5">
        { showMoreIcons && (
          <>
            <ShareIcon
              className="w-6 h-6" 
              onClick={handleShare} />
            <BookmarkIcon
              className="w-6 h-6 text-primary fill-current"
              onClick={handleBookmark} />
          </>
        )}
        <MemuIcon
          className="w-6 h-6"
          onClick={openSidebar} />
      </div>
    </header>
  );
}
 
export default Header;