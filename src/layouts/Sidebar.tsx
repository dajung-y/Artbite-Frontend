// src/layouts/Sidebar.tsx

import type React from "react";
import { FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { label: '오늘노트', to: '/today' },
  { label: '지난노트', to: '/' },
  { label: '북마크', to: '/' },
  { label: '멤버십', to: '/membership' },
]

const bottomItems = [
  { label: '로그아웃' , onclick: () => console.log('로그아웃') },
  { label: '이용약관' , onclick: () => console.log('이용약관') },
]


const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  if(!isOpen){
    return null;
  }
  return(
    // 사이드바 전체 영역
    <aside 
      className="
        absolute top-0 right-0 bg-black text-white z-50 
        w-3/5 max-w-[400px] h-full
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
          {menuItems.map((i) => (
            <Link 
              key={i.to}
              to={i.to}
              onClick={onClose}
              className="self-stretch h-14 px-6 flex items-center" >
              <span className="text-white text-2xl leading-9">
                {i.label}
              </span>
            </Link>
          ))}
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