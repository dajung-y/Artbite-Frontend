// src/layouts/MobileLayout.tsx
// 모바일 뷰어 레이아웃

import type React from "react";
import Sidebar from "./Sidebar";
import { useSidebarStore } from "../stores/sidebarStore";
import Overlay from "../components/common/Overlay";

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

        {isSidebarOpen && <Overlay onClick={closeSidebar} />}
        <Sidebar />

      </div>
    </div>
   );
}
 
export default MobileLayout;