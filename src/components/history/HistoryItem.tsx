import { useNavigate } from "react-router-dom";
import type { HistoryItems } from "../../types/history"
import { formatDate } from "../../utils/formatDate";

interface HistoryItemProps {
  data: HistoryItems;
}

export default function HistoryItem({data}: HistoryItemProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log(`해당노트의 id(${data.id})로 이동`);
    navigate(`/today/${data.id}`);
  }
  return (
    <div className="px-5 py-6 bg-transparent"
         key={data.id}
         onClick={handleClick} >
      <div className="flex gap-4">
        {/* 썸네일 */}
        <div className="w-20 h-20 rounded-md overflow-hidden">
          <img  
            src={data.mainImageUrl}
            alt={data.title}
            className="w-full h-full object-cover"
          />
        </div>
        {/* 컨텐츠 */}
        <div className="flex flex-col justify-between text-white">
          <h4 className="text-base font-medium text-white line-clamp-2">{data.title}</h4>
          <div className="flex gap-1">
            <span>{formatDate(data.publishedAt)}</span>
            <span>{data.creatorName}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
