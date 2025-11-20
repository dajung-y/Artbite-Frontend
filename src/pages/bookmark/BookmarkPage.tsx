// src/pages/bookmark/BookmarkPage.tsx
// 북마크페이지

import { useEffect, useState } from 'react';
import BookmarkList from '../../components/bookmark/BookmarkList';

import type { BookmarkListItemResponse } from '../../types/bookmark';
import Searchbar from '../../components/common/Searchbar';
import Header from '../../components/common/Header';
import { BookmarkApi } from '../../api/bookmarkApi';
import BookmarkEmpty from '../../components/bookmark/BookmarkEmpty';
import useDebounce from '../../hooks/useDebounce';
import Loading from '../../components/common/Loading';

export default function BookmarkPage() {
  const [data, setData] = useState<BookmarkListItemResponse['data'] | null>(null);
  const [filteredData, setFilteredData] = useState<BookmarkListItemResponse['data'] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [keyword, setkeyword] = useState<string>("");

  const debouncedKeyword = useDebounce(keyword, 400);

  // 전체 북마크 조회
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try{
        const res = await BookmarkApi.getBookmarkList(keyword);
        setData(res.data);
        setFilteredData(res.data);
      } catch(err: any){
        console.error("데이터를 불러오지 못했습니다",err);
        setData(null);
        setFilteredData(null);
      } finally{
        setLoading(false);
      }
    };
    fetchData();
  },[]);

  // 검색어 필터
  useEffect(() => {
    if(debouncedKeyword.trim() === ""){
      setFilteredData(data);
      return;
    }

    const fetchFiltered = async () => {
      try{
        const res = await BookmarkApi.getBookmarkList(debouncedKeyword);
        setFilteredData(res.data);
      } catch(err: any){
        console.error("검색 결과를 불러오지 못했습니다",err);
        setFilteredData(null);
      }
    };
    fetchFiltered();
  },[debouncedKeyword, data]);


  return (
    <div className="w-full h-screen flex flex-col">
      <Header />
      <h3 className="px-5 py-6 text-title3 text-greyscale-100">북마크</h3>

      {/* 북마크 데이터 있을 때만 */}
      {data && data.length > 0 && (
        <Searchbar
        value={keyword} 
        onChange={(value: string) => setkeyword(value)} />
      )}

      {loading ? (
        // 로딩상태
        <Loading />
      ) : (
        <>
        {/* 원본 데이터 없음 */}
        {data && data.length === 0 ? (
          <BookmarkEmpty />
        ) : (
          <>
          {/* filtered 결과 있음 */}
          {filteredData && filteredData.length > 0 ? (
            <BookmarkList bookmarks={filteredData} />
          ) : (
              <div className='flex-1 flex text-body1 text-greyscale-300 justify-center items-center'>해당하는 북마크가 없어요</div>
          )}
          </>
        )}
        </>
      )}
    </div>
  )
}
