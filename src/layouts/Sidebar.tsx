// src/layouts/Sidebar.tsx

import type React from "react";
import { FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

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


const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {

  const location = useLocation();

  if(!isOpen) return null;

  return(
    // 사이드바 전체 영역
    <aside 
      className="
        fixed top-0 right-0 bg-black text-white z-50 
        w-3/5 max-w-[400px] h-screen
        flex flex-col justify-between"
      >

      {/* 상단 : 닫기 + 메뉴 */}
      <div className="flex flex-col gap-2">
        {/* 닫기버튼 */}
        <div className="flex justify-end px-4 pt-8 pb-4">
          <FiX 
            className="w-6 h-6"
            onClick={onClose} />
        </div>
        {/* 메뉴 */}
        <nav className="flex flex-col">
          {menuItems.map((i) => {
            const isActive = location.pathname === i.to;
            return(
              <Link
                key={i.to}
                to={i.to}
                onClick={onClose} // 이동시 사이드바 닫히게?
                className={`
                  self-stretch h-14 px-6 flex items-center
                  ${isActive ? "text-primary" : "text-white"}
                `}
              >
                <span className="text-xl font-semibold leading-9">{i.label}</span>
              </Link>
            )
          })}
        </nav>
      </div>
      {/* 하단버튼 */}
      <div className="self-stretch px-6 pb-8 flex justify-center items-center gap-6 opacity-50 text-base font-medium leading-6">
        {bottomItems.map((btn) => (
          <button key={btn.label} onClick={btn.onclick}>
            {btn.label}
          </button>
        ))}
      </div>
    </aside>
  )
}

export default Sidebar