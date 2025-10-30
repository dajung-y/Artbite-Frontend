// src/layouts/MobileLayout.tsx
// 모바일 뷰어 레이아웃

import type React from "react";

interface MobileLayoutProps {
  children: React.ReactNode;
}
 
const MobileLayout: React.FC<MobileLayoutProps> = ({ children }) => {
  return ( 
    <div className="bg-gray-200 min-h-screen flex justify-center">
      {/* 모바일 영역 흰색 */}
      <div className="w-full max-w-[600px] min-h-screen bg-white relative">
        {/* 헤더 추가 예정 */}
        <main>
          {children}
        </main>
      </div>
    </div>
   );
}
 
export default MobileLayout;