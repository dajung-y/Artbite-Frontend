// src/pages/archived/ArchivedPage.tsx

import { useEffect, useState } from "react"
import type { ArchivedNoteSummaryResponse } from "../../types/archived";
import ArchivedList from "../../components/archived/ArchivedList";
import Searchbar from "../../components/common/Searchbar";
import Header from "../../components/common/Header";
import { ArchivedApi } from "../../api/archivedApi";

export default function ArchivedPage() {

  const [data, setData] = useState<ArchivedNoteSummaryResponse["data"] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [keyword, setKeyword] = useState<string>("");

  // api 호출
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try{
        const res = await ArchivedApi.getArchivedList(
          keyword ? { keyword } : undefined
        );
        setData(res.data);
      } catch(err: any){
        console.error("데이터를 불러오지 못했습니다", err);
        setData(null);
      } finally{
        setLoading(false);
      }
    };
    fetchData();
  },[keyword]);


  return (
    <div className="w-full h-full flex flex-col">
      <Header />
      <h3 className="px-5 py-6 text-lg text-title3 text-greyscale-100">전체 작업노트</h3>

      {/* 검색창 */}
      <Searchbar
        value={keyword}
        onChange={(value: string) => setKeyword(value)} />

      {/* 로딩처리 방법 고민 */}
      {loading && <p className="text-greyscale-100">데이터 불러오는 중...</p>}

      {/* 검색결과 없을 때 화면 수정하기 */}
      {!loading && data && data.content.length === 0 && (
        <p className="text-greyscale-100">검색 결과가 없습니다</p>
      )}
      
      {!loading && data && data.content.length > 0 && (
        <ArchivedList notes={data.content} />
      )}
    </div>
  )
}
