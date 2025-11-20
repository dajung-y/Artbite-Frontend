// src/components/commom/Searchbar.tsx
// 서치바 : ArchivedPage, BookmarkPage 스타일 적용 완료

import SearchIcon from '@/assets/icons/icon-search.svg';

interface SearchbarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function Searchbar({ value, onChange }: SearchbarProps) {

  return (
    <div className="px-5 w-full">
      <div className="self-stretch w-full px-4 py-2 bg-greyscale-600 rounded-lg inline-flex items-center gap-1">
        {/* 검색 아이콘 */}
          <img src={SearchIcon} className="w-6 h-6" />
        {/* 검색 입력 */}
        <input
          type="text"
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder="작업노트, 작가 이름"
          className="w-full bg-transparent placeholder-greyscale-400 text-body text-greyscale-100 focus:outline-none"
          />
      </div>
    </div>
  )
}
