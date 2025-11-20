// src/components/bookmark/BookmarkCard.tsx
// 북마크 카드 아티클

import { useNavigate } from "react-router-dom";
import type { BookmarkData } from "../../types/bookmark"

interface BookmarkCardProps {
  data: BookmarkData;
}

export default function BookmarkCard({ data } : BookmarkCardProps) {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/note/${data.noteId}`);
  }

  return (
    <article 
      className="w-full h-full flex flex-col rounded-lg overflow-hidden"
      onClick={handleClick}>
      {/* 썸네일 */}
      <div className="w-full aspect-square overflow-hidden bg-greyscale-500">
        <img
          src={data.mainImageUrl}
          alt={data.title}
          className="object-cover w-full h-full" />
      </div>

      {/* 컨텐츠 */}
      <div className="flex flex-col bg-secondary p-4 gap-1 flex-1">
        <h3 className="text-body2 text-greyscale-100 line-clamp-2">{data.title}</h3>
        <p className="text-caption text-greyscale-400">{data.creatorName}</p>
      </div>
    </article>
  )
}
