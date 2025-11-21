// src/pages/archived/ArchivedPage.tsx

import { useEffect, useState } from "react"
import type { ArchivedNoteSummaryResponse } from "../../types/archived";
import ArchivedList from "../../components/archived/ArchivedList";
import Searchbar from "../../components/common/Searchbar";
import Header from "../../components/common/Header";
import { ArchivedApi } from "../../api/archivedApi";
import Loading from "../../components/common/Loading";
import useDebounce from "../../hooks/useDebounce";


export default function ArchivedPage() {

  const [data, setData] = useState<ArchivedNoteSummaryResponse["data"] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [keyword, setKeyword] = useState<string>("");
  // 디바운스 적용되는 키워드 state 하나 더 선언
  const debouncedKeyword = useDebounce(keyword, 400);


  // api 호출
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try{
        const res = await ArchivedApi.getArchivedList(
          debouncedKeyword ? { keyword: debouncedKeyword } : undefined
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
  },[debouncedKeyword]);

  return (
    <div className="w-full h-screen flex flex-col">
      <Header />
      <h3 className="px-5 py-6 text-title3 text-greyscale-100">전체 작업노트</h3>

      {/* 검색창 */}
      <Searchbar
        value={keyword}
        onChange={(value: string) => setKeyword(value)} />
      <div className="w-full h-4" />

      {loading && <Loading />}

      {/* 검색결과 없을 때 화면 수정하기 */}
      {!loading && data && data.content.length === 0 && (
        <div className="flex-1 flex justify-center items-center text-greyscale-100">
          검색결과가 없습니다
        </div>
      )}
      <div className="flex-1 overflow-y-auto">
        {!loading && data && data.content.length > 0 && (
          <ArchivedList notes={data.content} />
        )}
      </div>
    </div>
  )
}
