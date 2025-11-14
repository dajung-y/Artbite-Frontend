// src/layouts/MobileLayout.tsx
// 모바일 뷰어 레이아웃

import type React from "react";
import Sidebar from "./Sidebar";
import { useSidebarStore } from "../stores/sidebarStore";

interface MobileLayoutProps {
  children: React.ReactNode;
}
 

const MobileLayout: React.FC<MobileLayoutProps> = ({ children }) => {

  
  const isSidebarOpen = useSidebarStore((state) => state.isOpen);
  const closeSidebar = useSidebarStore((state) => state.closeSidebar)

  return ( 
    <div className="bg-gray-200 min-h-screen flex justify-center">
      {/* 모바일 컨테이너 */}
      <div className="relative w-full max-w-[600px] min-h-screen bg-greyscale-900 flex flex-col">

        {/* 본문 페이지 */}
        <main className="relative flex-1 h-full">
          {children}
        </main>

        {/* 오버레이 */}
        {isSidebarOpen && (
          <div
            className="absolute inset-0 bg-black-100/50 z-40"
            onClick={closeSidebar} />
        )}

        {/* 사이드바 */}
        <Sidebar />
      </div>
    </div>
   );
}
 
export default MobileLayout;