import type { BookmarkListItemResponse, BookmarkToggleResponse } from "../types/bookmark";
import axiosInstance from "./axiosInstance";

export const BookmarkApi = {
  getBookmarkList: async (keyword?: string): Promise<BookmarkListItemResponse> => {
    const res = await axiosInstance.get<BookmarkListItemResponse>(
      '/api/notes/bookmarks', { params: { keyword }}
    );
    return res.data;
  },

  postBookmarkToggle: async (noteId: number) : Promise<BookmarkToggleResponse> => {
    const res = await axiosInstance.post<BookmarkToggleResponse>(
      `/api/notes/${noteId}/bookmark`,
    );
    return res.data;
  }
}