// src/components/bookmark/BookmarkList.tsx
// 북마크 리스트

import type { BookmarkData } from "../../types/bookmark"
import BookmarkCard from "./BookmarkCard"

interface BookmarkListProps {
  bookmarks: BookmarkData[];
}

export default function BookmarkList({ bookmarks } : BookmarkListProps) {
  return (
    <div className="px-5 py-6 grid grid-cols-2 gap-4">
      {bookmarks.map((item, index) => (
        <BookmarkCard key={index} data={item} />
      ))}
    </div>
  )
}
