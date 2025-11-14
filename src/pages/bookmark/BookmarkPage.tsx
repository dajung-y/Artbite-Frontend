// src/pages/bookmark/BookmarkPage.tsx
// 북마크페이지 :

import { useEffect, useState } from 'react';
import BookmarkList from '../../components/bookmark/BookmarkList';
import mockBookmark from '../../mocks/mockBookmark.json';
import type { BookmarkResponse } from '../../types/bookmark';
import Searchbar from '../../components/common/Searchbar';
import Header from '../../components/common/Header';

export default function BookmarkPage() {
  const [data, setData] = useState<BookmarkResponse['data'] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // api 호출
 useEffect(() => {
  const timer = setTimeout(() => {
    const res = mockBookmark as BookmarkResponse;
    setData(res.data);
    setLoading(false);
  }, 2000); // 2초 지연

  return () => clearTimeout(timer);
 },[]);

  return (
    <div className="w-full h-full flex flex-col">
      <Header />
      <h1 className="px-5 py-6 text-lg text-white">북마크</h1>

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
            <Searchbar />
            <BookmarkList bookmarks={data} />
          </div>
        ) : (
          <div className='text-white'>
            저장된 북마크가 없습니다
          </div>
        )}
        </>
      )}

    </div>
  )
}
