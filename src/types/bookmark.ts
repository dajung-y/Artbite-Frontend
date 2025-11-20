import type { APIResponse } from "./common";

export interface BookmarkData {
  noteId: number;
  title: string;
  mainImageUrl: string;
  creatorName: string;
  tagText: string;
}

export type BookmarkListItemResponse = APIResponse<BookmarkData[]>;
export type BookmarkToggleResponse = APIResponse<Record<string, boolean>>;