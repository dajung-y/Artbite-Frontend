// src/pages/main/MainPage.tsx

import { useNavigate } from "react-router-dom";
import Button from "../../components/common/Button";
import { useState } from "react";
import mockCover from '../../mocks/mockTodayCover.json';

export default function MainPage() {

  // api 호출
  // 현재는 mockTodayCover 사용
  const data = mockCover.data;

  const navigate = useNavigate();
  // 이미지 확장
  const [extended, setExtended] = useState<boolean>(false);
  
  const handleNote = () => {
    console.log("상세페이지로 이동");
    navigate('/today');
  };

  return (
    <div className="w-full h-[calc(100vh-80px)] flex flex-col justify-between text-white overflow-hidden">
      {/* 이미지 */}
      <div
        className={`
          w-full overflow-hidden transition-all duration-200
          ${extended ? "p-0" : "flex p-4 items-center justify-center"}
        `}
        onClick={() => setExtended((prev) => !prev)}>
        <img  
          src={data.mainImageUrl}
          alt="오늘의 작품"
          className={`w-full h-full
            ${extended ? 'object-cover' : 'object-contain'}
            `}
          />
      </div>

      {/* 하단 컨테이너 */}
      <div className="flex flex-col w-full px-5 pt-4 pb-12 space-y-6">
        {/* 작품 소개 */}
        <div className="flex flex-col gap-2 text-white">
          <h3 className="text-lg font-semibold">{data.title}</h3>
          <p className="text-sm font-light">{data.teaser}</p>
        </div>
        
        {/* 작가 소개 */}
        <div className="flex text-white">
          <p className="text-sm font-light">{data.creatorName}</p>
        </div>
        {/* 버튼 */}
        <div>
          <Button
            size="large"
            fullWidth
            onClick={handleNote}
            >
            오늘의 작업노트 보러가기
          </Button>
        </div>
      </div>
    </div>
  )
}
