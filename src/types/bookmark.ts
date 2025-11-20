import type { APIResponse } from "./common";

export interface BookmarkData {
  noteId: number;
  title: string;
  mainImageUrl: string;
  creatorName: string;
  tagText: string;
}

export interface BookmarkToggle {
  bookmarked: boolean;
}

export type BookmarkListItemResponse = APIResponse<BookmarkData[]>;
export type BookmarkToggleResponse = APIResponse<BookmarkToggle>;