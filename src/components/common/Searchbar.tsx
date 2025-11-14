// src/components/commom/Searchbar.tsx
// 서치바 : HistoryPage, BookmarkPage 스타일 적용 완료

import { useState } from "react"
import { FiSearch } from "react-icons/fi";

export default function Searchbar() {
  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <div className="px-5 w-full">
      <div className="self-stretch w-full px-4 py-2 bg-greyscale-600 rounded-lg inline-flex items-center gap-1">
        {/* 검색 아이콘 */}
        <div className="w-4 h-4 overflow-hidden">
          <FiSearch className="w-full h-full text-greyscale-400" />
        </div>
        {/* 검색 입력 */}
        <input
          type="text"
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
          placeholder="작업노트, 작가 이름"
          className="w-full bg-transparent placeholder-greyscale-400 text-body text-greyscale-100 focus:outline-none"
          />
      </div>
    </div>
  )
}
