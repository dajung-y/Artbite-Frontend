// src/components/bookmark/BookmarkCard.tsx
// 북마크 카드 아티클

import { useNavigate } from "react-router-dom";
import type { BookmarkItem } from "../../types/bookmark"

interface BookmarkCardProps {
  data: BookmarkItem;
}

export default function BookmarkCard({data} : BookmarkCardProps) {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/today/${data.id}`);
  }

  return (
    <article 
      className="aspect-[3/4] flex flex-col rounded-lg overflow-hidden"
      onClick={handleClick}>
      {/* 썸네일 */}
      <div className="flex-1 overflow-hidden">
        <img
          src={data.mainImageUrl}
          alt={data.title}
          className="object-cover w-full h-full" />
      </div>

      {/* 컨텐츠 */}
      <div className="flex flex-col space-y-1 bg-secondary p-4">
        <h3 className="text-white text-sm font-medium line-clamp-2">{data.title}</h3>
        <p className="text-white text-sm font-light">{data.creatorName}</p>
      </div>
    </article>
  )
}
