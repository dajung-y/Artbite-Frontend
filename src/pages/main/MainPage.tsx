// src/pages/main/MainPage.tsx

import { useNavigate } from "react-router-dom";
import Button from "../../components/common/Button";
import TestImg from '../../assets/images/profileImg.jpg';
import { useState } from "react";

export default function MainPage() {

  const navigate = useNavigate();
  // 이미지 확장
  const [extended, setExtended] = useState<boolean>(false);
  
  const handleNote = () => {
    console.log("상세페이지로 이동");
    navigate('/detail');
  };

  return (
    <div className="w-full h-full flex flex-col justify-between text-white">
      {/* 이미지 */}
      <div
        className={`
          w-full overflow-hidden flex-1 transition-all duration-200
          ${extended ? "p-0" : "flex p-4 items-center justify-center"}
        `}
        onClick={() => setExtended((prev) => !prev)}
      >
        <img  
          src={TestImg}
          alt="테스트이미지"
          className={`w-full h-full
            ${extended ? 'object-cover' : 'object-contain'}
            `}
          />
      </div>

      {/* 하단 컨테이너 */}
      <div className="flex flex-col w-full px-4 pt-4 pb-8 mb-0 gap-6">
        {/* 작품 소개 */}
        <div className="flex flex-col gap-1 text-white">
          <div className="text-lg">
            <span>노트 타이틀</span>
            <span className="text-primary"> (최대 30자)</span>
          </div>
          <div>
            <span className="text-sm">작업 관련 소개글이 들어가는 영역</span>
            <span className="text-primary text-sm"> (최대 100자)</span>
          </div>
        </div>
        {/* 작가 소개 */}
        <div className="flex gap-1 text-white text-sm">
          <span>작성자 명</span>
          <span className="text-primary">(최대 10자)</span>
          <span className="mx-1">·</span>
          <span>직무명</span>
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
