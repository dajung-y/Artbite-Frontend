import type { ReminderData } from "../../types/reminder"

interface RemindBannerProps {
  data: ReminderData['payload'];
}

export default function RemindBanner({ data }: RemindBannerProps) {
  return (
    <div className="w-full px-3">
      {/* 배너 박스 */}
      <div className="p-4 bg-greyscale-700/80">
        {/* 이미지 */}
        <div>
          <img  
            src={data.mainImageUrl}
            alt={data.title}
            className="" />
        </div>
        {/* 콘텐츠 */}
        <div className="flex flex-col text-start gap-1">
          <h4 className="text-title4 text-greyscale-100">잊고있는 작업노트</h4>
          <p className="text-caption text-greyscale-200">{data.title}</p>
        </div>
        {/* 닫기 버튼 */}
        <div>

        </div>

      </div>

    </div>
  )
}
