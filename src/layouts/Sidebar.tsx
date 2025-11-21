// src/layouts/Sidebar.tsx

import { useLocation, useNavigate } from "react-router-dom";
import { useSidebarStore } from "../stores/sidebarStore";
import useAuthStore, { clearTokenState } from "../stores/authStore";
import axiosInstance from "../api/axiosInstance";
import type { LogoutResponse } from "../types/auth";
import { ReactComponent as CloseIcon } from "@/assets/icons/icon-close-white.svg";
import  ArrowIcon from "@/assets/icons/icon-arrow.svg";

const menuItems = [
  { label: '홈', to: '/'},
  { label: '오늘의 작업노트', to: '/today' },
  { label: '전체 작업노트', to: '/archived' },
  { label: '북마크', to: '/bookmark' },
  { label: '멤버십', to: '/membership' },
]

export default function Sidebar() {

  const navigate = useNavigate();
  const { accessToken } = useAuthStore();
  const isOpen = useSidebarStore((state) => state.isOpen);
  const closeSidebar = useSidebarStore((state) => state.closeSidebar);
  const location = useLocation();

  const userName = "회원";

  if(!isOpen) return null;

  // 로그아웃
  const handleAuthButton = async () => {
    closeSidebar();
      try{
        await axiosInstance.post<LogoutResponse>('/api/auth/logout');
      } catch(err) {
        console.error(err);
      } finally {
        clearTokenState();
        navigate('/login');
      }
  };

  // 이용약관
  const handleTermsButton = () => {
    console.log("이용약관");
  }

  return(
    // 사이드바 전체 영역
    <aside 
      className="
        fixed top-0 right-0 bg-greyscale-700 text-greyscale-100 z-[1000]
        w-3/5 max-w-[400px] h-screen
        flex flex-col justify-between"
      >

      {/* 상단 : 닫기 + 메뉴 */}
      <div className="flex flex-col gap-2">
        {/* 닫기버튼 */}
        <div className="flex justify-end px-5 pt-6 pb-4">
          <CloseIcon
            className="w-6 h-6"
            onClick={closeSidebar} />
        </div>
        {/* 계정정보 추가 */}
        <div 
          className="flex px-8 py-4"
          onClick={
            ! accessToken
               ? () => (
                closeSidebar(),
                navigate('/login') 
              )
               : () => (
                closeSidebar()
               )
          }>
          <div className="flex w-full gap-2 justify-between items-center">
            <p className="text-title4 text-greyscale-400">{accessToken ? `${userName}님, 안녕하세요` : "로그인 해주세요" }</p>
            <span className="w-4 flex items-center text-end">
              <img src={ArrowIcon} className="w-full h-full" />
            </span>
          </div>
        </div>

        {/* 메뉴 */}
        <nav className="flex flex-col">
          {menuItems.map((i) => {
            const isActive = location.pathname === i.to;

            const handleMenuClick = () => {
              closeSidebar();

              const needLoginPaths = ['/today', '/archived', '/bookmark'];

              // 비로그인 사용자
              if(!accessToken && needLoginPaths.includes(i.to)){
                navigate('/login');
                return;
              }
              navigate(i.to);
            };

            return(
              <button
                key={i.label}
                onClick={handleMenuClick}
                className={`
                  self-stretch px-8 py-3.5 flex items-center
                  ${isActive ? "text-primary" : ""}
                `}>
                <span className="text-title3">{i.label}</span>
              </button>
            )
          })}
        </nav>
      </div>
      {/* 하단버튼 : 비로그인 상태일 때 로그인 버튼 제거 예정 */}
      <div className="p-6 flex items-center justify-between">
        { accessToken && (
          <button
          onClick={handleAuthButton}
          className="flex-1 text-center text-title4 text-greyscale-500" >
            로그아웃
          </button>
        )}
        <button
          onClick={handleTermsButton}
          className="flex-1 text-center text-title4 text-greyscale-500" >
          이용약관
        </button>
      </div>
    </aside>
  )
}

