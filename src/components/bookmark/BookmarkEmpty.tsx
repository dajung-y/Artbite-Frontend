import { useNavigate } from "react-router-dom";
import Button from "../common/Button";
import ArrowIcon from '@/assets/icons/icon-arrow.svg';


export default function BookmarkEmpty() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/archived');
  }
  return (
    // 전체 컨테이너
    <div className="flex-1 flex flex-col justify-center items-center">
      {/* 문구 + 버튼 */}
      <div className="flex flex-col gap-4 items-center">
        {/* 문구 */}
        <div className="text-body1 text-greyscale-300 text-center">
          <span>저장한 북마크가 없어요<br/>마음에 드는 작업노트를 찾아보세요</span>
        </div>
        <div>
          <Button
            variant="tertiary"
            size="sm"
            icon={<img src={ArrowIcon} className="w-4 h-4" />}
            iconPosition="right"
            iconSize="sm"
            onClick={handleClick}
          >
            작업노트 둘러보기
          </Button>
        </div>
      </div>
    </div>
  )
}
