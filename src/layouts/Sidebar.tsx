// src/layouts/Sidebar.tsx
// 사이드바 : 스타일 적용 완료

import { FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { useSidebarStore } from "../stores/sidebarStore";


const menuItems = [
  { label: '홈', to: '/'},
  { label: '오늘의 작업노트', to: '/today' },
  { label: '지난 작업노트', to: '/history' },
  { label: '북마크', to: '/bookmark' },
  { label: '멤버십', to: '/membership' },
]

const bottomItems = [
  { label: '로그아웃' , onclick: () => console.log('로그아웃') },
  { label: '이용약관' , onclick: () => console.log('이용약관') },
]

export default function Sidebar() {

  const isOpen = useSidebarStore((state) => state.isOpen);
  const closeSidebar = useSidebarStore((state) => state.closeSidebar);
  const location = useLocation();

  if(!isOpen) return null;

  return(
    // 사이드바 전체 영역
    <aside 
      className="
        fixed top-0 right-0 bg-greyscale-900 text-greyscale-100 z-50 
        w-3/5 max-w-[400px] h-screen
        flex flex-col justify-between"
      >

      {/* 상단 : 닫기 + 메뉴 */}
      <div className="flex flex-col gap-2">
        {/* 닫기버튼 */}
        <div className="flex justify-end px-4 pt-8 pb-4">
          <FiX 
            className="w-6 h-6"
            onClick={closeSidebar} />
        </div>
        {/* 메뉴 */}
        <nav className="flex flex-col">
          {menuItems.map((i) => {
            const isActive = location.pathname === i.to;
            return(
              <Link
                key={i.to}
                to={i.to}
                onClick={closeSidebar} 
                className={`
                  self-stretch h-14 px-6 flex items-center
                  ${isActive ? "text-primary" : ""}
                `}
              >
                <span className="text-title2">{i.label}</span>
              </Link>
            )
          })}
        </nav>
      </div>
      {/* 하단버튼 */}
      <div className="self-stretch p-6 inline-flex justify-start items-center">
        {bottomItems.map((btn) => (
          <button 
            key={btn.label} 
            onClick={btn.onclick}
            className="flex-1 text-center text-title4 text-greyscale-500">
            {btn.label}
          </button>
        ))}
      </div>
    </aside>
  )
}

