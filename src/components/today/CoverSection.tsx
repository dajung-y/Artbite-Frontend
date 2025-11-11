// src/components/today/CoverSection.tsx
// 오늘의 노트 페이지 표지

import type { Cover } from "../../types/todayNote"
import { formatDate } from "../../utils/formatDate";

export interface CoverProps {
  cover: Cover;
}

export default function CoverSection({ cover } : CoverProps) {


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
