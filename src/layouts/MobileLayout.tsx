// src/layouts/MobileLayout.tsx
// 모바일 뷰어 레이아웃

import type React from "react";
import Header from "./Header";

interface MobileLayoutProps {
  children: React.ReactNode;
}
 

const MobileLayout: React.FC<MobileLayoutProps> = ({ children }) => {
  return ( 
    <div className="bg-gray-200 min-h-screen flex justify-center">
      {/* 모바일 영역 흰색 */}
      <div className="relative w-full max-w-[600px] min-h-screen bg-black flex flex-col">
        <Header
          className="absolute top-0 left-0 w-full z-20 bg-transparent"/>
        {/* 본문 페이지 */}
        <main className="relative flex-1 h-full">
          {children}
        </main>
      </div>
    </div>
   );
}
 
export default MobileLayout;