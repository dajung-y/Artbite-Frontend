// src/pages/main/MainPage.tsx

import { useNavigate } from "react-router-dom";
import Button from "../../components/common/Button";
import { useEffect, useState } from "react";
import Header from "../../components/common/Header";
import clsx from "clsx";
import useAuthStore from "../../stores/authStore";
import type { Cover } from "../../types/note";
import { noteApi } from "../../api/noteApi";

export default function MainPage() {

  const navigate = useNavigate();

  const [data, setData] = useState<Cover | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [extended, setExtended] = useState<boolean>(false);

  const { accessToken } = useAuthStore();


  // api 호출
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try{
        const res = await noteApi.getTodayCover();
        setData(res ?? null);
      } catch(err){
        console.error(err);
        setError("데이터를 불러오지 못했습니다");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  },[]);
  
  const handleNote = () => {
    if(!accessToken) {
      navigate('/login');
    } else {
      navigate('/today');
    }
  };

  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center bg-greyscale-900">
        <p className="text-greyscale-100">로딩중...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-screen flex flex-col justify-center items-center bg-greyscale-900 gap-4">
        <p className="text-red-400">{error}</p>
        <Button onClick={() => window.location.reload()}>재시도</Button>
      </div>
    );
  }


  return (
    <div className="relative w-full h-screen flex flex-col bg-greyscale-900 overflow-hidden">
      <Header />
      { data && (
        <>
        <div 
          className={clsx(
          "w-full flex-1 justify-center items-center transition-all duration-300",
          extended ? "inset-0 -mt-16" : "px-6 py-4"
          )}
          onClick={() => setExtended(prev => !prev)}
          >

          {/* 메인이미지 */}
          <img  
            src={data.mainImageUrl}
            alt={data.title}
            className={clsx(
              "w-full h-full object-contain transition-all duration-300",
              extended ? "object-cover" : ""
            )} />

        </div>

        {/* 하단 컨테이너 */}
        <div className="flex flex-col w-full px-5 pt-4 pb-12 gap-6 bg-gradient-to-t from-greyscale-900 via-greyscale-900 to-transparent">
          {/* 작품 소개 */}
          <div className="flex flex-col gap-2">
            <h3 className="text-title3 text-greyscale-100 break-keep">{data.title}</h3>
            <p className="text-caption text-greyscale-400">{data.teaser}</p>
          </div>
          
          {/* 작가 소개 */}
          <div className="flex items-center justify-start gap-1 text-caption text-greyscale-300">
            <span>{data.creatorName}</span>
            <span> · </span>
            <span>{data.creatorJobTitle}</span>
          </div>
          {/* 버튼 */}
          <div>
            <Button
              fullWidth
              onClick={handleNote}
              >
              오늘의 작업노트 보기
            </Button>
          </div>
        </div>
        </>
      )}
    </div>
  )
}
