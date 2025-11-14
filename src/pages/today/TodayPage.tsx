import FullContent from "../../components/today/FullContent";
import PreviewContent from "../../components/today/PreviewContent";
import { useSubscriptionStore } from "../../stores/subscriptionStore"

import mockDetail from '../../mocks/mockTodayNoteDetail.json';
import mockPreview from '../../mocks/mockTodayNotePreview.json';
import mockArchivedDetail from '../../mocks/mockArchivedDetail.json';

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { ArchivedNoteDetail, TodayNoteDetail, TodayNotePreview } from "../../types/todayNote";
import Header from "../../components/common/Header";

export default function TodayPage() {

  const { id } = useParams();
  const { isSubscribed } = useSubscriptionStore();

  const [data, setData] = useState<TodayNoteDetail | TodayNotePreview | ArchivedNoteDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string|null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    
    const timer = setTimeout(() => {
      try{
        let response: TodayNoteDetail | TodayNotePreview | ArchivedNoteDetail;

        if(id) {
          if(!isSubscribed){
            throw new Error("구독자 전용 콘텐츠입니다");
          }
          response = mockArchivedDetail.data as ArchivedNoteDetail;
        } else {
          response = isSubscribed
            ? (mockDetail.data as TodayNoteDetail)
            : (mockPreview.data as TodayNotePreview)
        }

        setData(response);
      } catch(err: any) {
        setError(err.message)
      } finally{
        setLoading(false);
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [id,isSubscribed]);

  if(loading) {
    return (
      <div className="text-white">
        데이터 불러오는 중...
      </div>
    )
  }

  if(error) {
    return(
      <div className="text-white">
        {error}
      </div>
    )
  }

  if(!data) {
    return(
      <div className="text-white">
        데이터를 찾을 수 없습니다
      </div>
    )
  }

  return (
    <div className="w-full h-full flex flex-col">
      <Header />
      
      { data && isSubscribed ? (
        <FullContent data={data} />
      ) : (
        <PreviewContent data={data} />
      )}
    </div>
  )
}
