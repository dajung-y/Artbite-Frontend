// src/pages/history/HistoryPage.tsx
// 지난 작업노트 : 스타일링중

import { useEffect, useState } from "react"
import mockHistory from '../../mocks/mockHistory.json';
import type { HistoryResponse } from "../../types/history";
import HistoryList from "../../components/history/HistoryList";
import Searchbar from "../../components/common/Searchbar";
import Header from "../../components/common/Header";

export default function HistoryPage() {

  const [data, setData] = useState<HistoryResponse['data'] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // api 호출
  useEffect(() => {
    const timer = setTimeout(() => {
      const res = mockHistory as HistoryResponse;
      setData(res.data);
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  },[]);

  return (
    <div className="w-full h-full flex flex-col">
      <Header />
      <h3 className="px-5 py-6 text-lg text-title3 text-greyscale-100">전체 작업노트</h3>
      {/* 검색창 */}
      
      {/* 노트 리스트 */}
      {!data ? (
        <p>데이터 불러오는 중...</p>
      ) : (
        <>
        <Searchbar />
        <HistoryList notes={data.content} />
        </>
      )}

    </div>
  )
}
