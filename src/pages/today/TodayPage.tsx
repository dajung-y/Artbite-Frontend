import FullContent from "../../components/today/FullContent";
import PreviewContent from "../../components/today/PreviewContent";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "../../components/common/Header";
import type { NoteData } from "../../types/note";
import { mockNoteApi } from "../../api/mockNoteApi";


export default function TodayPage() {

  const { id } = useParams();

  const [data, setData] = useState<NoteData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string|null>(null);


  // api 호출
  useEffect(() => {

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        let response: NoteData;

        if(!id){
          const todayData = await mockNoteApi.getTodayDetail();
          if(todayData?.accessible){
            response = { accessible: true, note: todayData.note};
          } else {
            response = {accessible: false, preview: todayData?.preview ?? null}
          }
        } else {
          const archivedData = await mockNoteApi.getArchivedNote(Number(id));
          if(archivedData?.accessible) {
            response = { accessible: true, note: archivedData.note};
          } else {
            response = {accessible: false, preview: archivedData?.preview ?? null};
          }
        }

        setData(response);
      } catch(err: any){
        setError(err.message || "데이터를 불러오는 중 오류가 발생했습니다");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if(loading) {
    return (
      <div className="text-title3 text-greyscale-100">
        데이터 불러오는 중...
      </div>
    )
  }

  if(error) {
    return(
      <div className="text-title3 text-greyscale-100">
        {error}
      </div>
    )
  }

  if(!data) {
    return(
      <div className="text-title3 text-greyscale-100">
        데이터를 찾을 수 없습니다
      </div>
    )
  }

  return (
    <div className="w-full h-full flex flex-col">
      <Header />
      
      { data.accessible && data.note ? (
        <FullContent data={data.note} />
      ) : data.preview ? (
        <PreviewContent data={data.preview} />
      ) : (
        <div>노트 정보가 없습니다</div>
      )}
    </div>
  )
}
