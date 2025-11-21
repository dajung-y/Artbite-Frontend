// src/components/common/Header.tsx

import clsx from "clsx";
import type React from "react";

import LogoIcon from "@/assets/resources/resource-logo-icon.svg"
import ShareIcon from "@/assets/icons/icon-share.svg";
import MemuIcon from "@/assets/icons/icon-menu.svg";
import BookmarkIcon from "@/assets/icons/icon-bookmark.svg";
import BookmarkFillIcon from "@/assets/icons/icon-bookmark-fill.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { useSidebarStore } from "../../stores/sidebarStore";
import { BookmarkApi } from "../../api/bookmarkApi";
import { showToast } from "../../utils/toast";
import { useCallback, useState } from "react";
import { debounce } from "lodash"



interface HeaderProps {
  className?: string;
  noteId?: number;
  initialBookmarked?: boolean;
}

const Header: React.FC<HeaderProps> = ( {noteId, initialBookmarked } ) => {
  const navigate = useNavigate();
  const location = useLocation();

  const openSidebar = useSidebarStore((state) => state.openSidebar);

  const showMoreIcons = location.pathname === '/today' || location.pathname.startsWith('/note/');

  const [isBookmarked, setIsBookmarked] = useState<boolean>(initialBookmarked ?? false);

  // 공유 버튼
  const handleShare = () => {
    console.log("공유 버튼 클릭");
  };

  // 북마크 버튼
  const handleBookmark = async () => {
    if(!noteId) return;

    try{
      const res = await BookmarkApi.postBookmarkToggle(noteId);
      
      const nowBookmarked = res.data?.bookmarked === true;
      setIsBookmarked(nowBookmarked);

      if(nowBookmarked){
        showToast('북마크에 저장했어요')
      }
    } catch(err: any){
      console.error("북마크 토글 실패", err);
    }
  };

  // 북마크 디바운스
  const debouncedHandleBookmark = useCallback(
    debounce(handleBookmark, 400, {leading: true, trailing: false}),
    [noteId]
  );

  return (
    <header 
      className={clsx(
        "sticky top-0 left-0 w-full z-50",
        "pl-5 pt-6 pr-4 pb-4 inline-flex justify-between items-end",
        "bg-gradient-to-b from-greyscale-900 via-greyscale-900/70  to-transparent"
      )}
    >
      {/* 왼쪽 : 홈 아이콘 */}
      <div className="w-20 h-6"
           onClick={() => navigate('/')}>
        <img src={LogoIcon} className="w-full h-full" />
      </div>

      {/* 오른쪽 : 아이콘 */}
      <div className="flex items-center justify-start gap-4">
        { showMoreIcons && (
          <>
          <div
            className="w-[28px] h-[28px]"
            onClick={handleShare} >
            <img src={ShareIcon} className="w-full h-full" />
          </div>
            {isBookmarked ? (
              <div
                className="w-[28px] h-[28px]"
                onClick={debouncedHandleBookmark} >
                <img src={BookmarkFillIcon} className="w-full h-full" />
              </div>
            ) : (
              <div
                className="w-[28px] h-[28px]"
                onClick={debouncedHandleBookmark} >
                <img src={BookmarkIcon} className="w-full h-full" />
              </div>
            )}
          </>
        )}
        <div
          className="w-[28px] h-[28px]"
          onClick={openSidebar} >
          <img src={MemuIcon} className="w-full h-full" />
        </div>
      </div>
    </header>
  );
}
 
export default Header;