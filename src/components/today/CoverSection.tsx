// src/components/today/CoverSection.tsx
// 오늘의 노트 페이지 표지

import type { Cover } from "../../types/todayNote"

export interface CoverProps {
  cover: Cover;
}

export default function CoverSection({ cover } : CoverProps) {

  function formatDate(dateString: string) : string {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth()+1;
    const day = date.getDate();

    return `${year}년 ${month}월 ${day}일`
  }

  return (
    <section className="flex flex-col w-full">
      {/* 이미지 */}
      <div className="w-full h-80">
        <img 
          src={cover.mainImageUrl}
          alt={cover.title}
          className="w-full h-full object-cover" />

      </div>
      {/* 창작물 정보 */}
      <div className="flex flex-col w-full px-5 py-8 text-white">
        <h2 className="text-xl">{cover.title}</h2>
        <p>{cover.creatorName}</p>
        <p>{formatDate(cover.publishedAt)}</p>
      </div>
    </section>
  )
}
