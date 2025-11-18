// src/components/today/CoverSection.tsx
// 오늘의 노트 페이지 표지

import type { Cover } from "../../types/note";
import { formatDate } from "../../utils/formatDate";

export interface CoverProps {
  cover: Cover;
}

export default function CoverSection({ cover } : CoverProps) {


  return (
    <section className="flex flex-col w-full -mt-16">
      {/* 이미지 */}
      <div className="w-full aspect-[3/4]">
        <img 
          src={cover.mainImageUrl}
          alt={cover.title}
          className="w-full h-full object-cover" />

      </div>
      {/* 창작물 정보 */}
      <div className="flex flex-col w-full px-5 pt-8 pb-10 gap-4">
        <div>
          <h1 className="text-title1 text-greyscale-100 break-keep">{cover.title}</h1>
        </div>
        <div className="flex flex-col gap-1 text-caption">
          <div className="text-greyscale-300 flex gap-1">
            <span>{cover.creatorName}</span>
            <span>·</span>
            <span>{cover.creatorJobTitle}</span>
          </div>
          <p className="text-greyscale-400">{formatDate(cover.publishedDate)}</p>
        </div>
      </div>
    </section>
  )
}
