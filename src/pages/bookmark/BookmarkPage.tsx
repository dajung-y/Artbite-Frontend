// src/pages/bookmark/BookmarkPage.tsx
// 북마크페이지 :

import { useEffect, useState } from 'react';
import BookmarkList from '../../components/bookmark/BookmarkList';

import type { BookmarkListItemResponse } from '../../types/bookmark';
import Searchbar from '../../components/common/Searchbar';
import Header from '../../components/common/Header';
import { BookmarkApi } from '../../api/bookmarkApi';
import BookmarkEmpty from '../../components/bookmark/BookmarkEmpty';

export default function BookmarkPage() {
  const [data, setData] = useState<BookmarkListItemResponse['data'] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [keyword, setkeyword] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try{
        const res = await BookmarkApi.getBookmarkList();
        setData(res.data);
      } catch(err: any){
        console.error("데이터를 불러오지 못했습니다",err);
        setData(null);
      } finally{
        setLoading(false);
      }
    };
    fetchData();
  },[]);


  return (
    <div className="w-full h-screen flex flex-col">
      <Header />
      <h3 className="px-5 py-6 text-title3 text-greyscale-100">북마크</h3>

      {loading ? (
        // 로딩상태
        <div className='text-white'>
          데이터를 불러오는 중입니다...
        </div>
      ) : (
        <>
        {/* 검색창 */}

        {data && data.length > 0 ? (
          <div className='flex flex-col space-y-6 w-full'>
            <Searchbar
              value={keyword} onChange={(value: string) => setkeyword(value)} />
            <BookmarkList bookmarks={data} />
          </div>
        ) : (
          <BookmarkEmpty />
        )}
        </>
      )}

    </div>
  )
}
