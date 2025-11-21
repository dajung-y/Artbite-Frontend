// src/components/main/RemindBanner.tsx

import { useState } from "react";
import type { ReminderData } from "../../types/reminder"
import CloseIcon from '@/assets/icons/icon-close-white.svg';
import Modal from "../common/Modal";
import { ReminderApi } from "../../api/reminderApi";
import { useNavigate } from "react-router-dom";

interface RemindBannerProps {
  data: ReminderData;
}

export default function RemindBanner({ data }: RemindBannerProps) {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const handletoNote = () => {
    navigate(`/note/${data.noteId}`);
  }

  const handleCloseBanner = () => {
    setIsModalOpen(true);
  };

  const handleDismissBanner = async () => {
    try{
      await ReminderApi.postDismissReminder();
      setIsModalOpen(false);
      setIsVisible(false);
    } catch(err: any){
      console.error("배너를 닫을 수 없습니다", err);
    }
  };

  if(!isVisible) return null;

  return (
    <>
      <div className="w-full px-4">
        {/* 배너 박스 */}
        <div 
          className="flex justify-between p-4 rounded-lg bg-greyscale-700/80"
          onClick={handletoNote}>
          {/* 컨텐츠 */}
          <div className="flex gap-4 items-center">
            {/* 이미지 */}
            <div className="w-14 h-14 flex-shrink-0 bg-greyscale-500 rounded-md overflow-hidden">
              <img  
                src={data.mainImageUrl}
                alt={data.title}
                className="w-full h-full object-cover" />
            </div>
            {/* 텍스트 */}
            <div className="flex flex-col justify-center text-start gap-1">
              <h4 className="text-title4 text-greyscale-100">잊고 있는 작업노트</h4>
              <p className="text-caption text-greyscale-200 line-clamp-1">{data.title}</p>
            </div>
          </div>
          {/* 닫기 버튼 */}
          <div className="flex items-start justify-center w-6">
            <img
              src={CloseIcon}
              className="w-full"
              onClick={(e) => {
                e.stopPropagation();
                handleCloseBanner();
              }} />
          </div>
        </div>
      </div>

      {isModalOpen && (
        <Modal
          title="정말 닫을까요?"
          subtitle="하루 동안 배너가 사라져요"
          confirmText="닫기"
          onCancel={() => setIsModalOpen(false)}
          onConfirm={handleDismissBanner} />
      )}
    </>

  )
}
