import type { ArchivedNoteViewResponse, NotePreviewResponse, TodayPublishedResponse,  NoteCoverResponse } from "../types/note"
import axiosInstance from "./axiosInstance"

export const noteApi = {

  // 오늘의 작업노트 커버
  async getTodayCover(): Promise<NoteCoverResponse["data"]> {
    const res = await axiosInstance.get<NoteCoverResponse>(
      "/api/notes/published/today-cover"
    );

    if(!res.data.success){
      throw new Error(res.data.error?.message || "커버 데이터를 불러오지 못했습니다");
    }
    return res.data.data;
  },

  // 오늘의 작업노트 프리뷰
  async getTodayPreview(): Promise<NotePreviewResponse["data"]> {
    const res = await axiosInstance.get<NotePreviewResponse>(
      "/api/notes/published/today-preview"
    );

    if(!res.data.success){
      throw new Error(res.data.error?.message || "프리뷰 데이터를 불러오지 못했습니다")
    }
    return res.data.data;
  },

  // 오늘의 작업노트 디테일
  async getTodayDetail(): Promise<TodayPublishedResponse["data"]> {
    const res = await axiosInstance.get<TodayPublishedResponse>(
      "/api/notes/published/today-detail"
    );

    if (!res.data.success) {
      throw new Error(res.data.error?.message || "디테일 데이터를 불러오지 못했습니다");
    }
    return res.data.data;
  },

  // 지난노트 상세/프리뷰
  async getArchivedNote(
    noteId: number
  ): Promise<ArchivedNoteViewResponse["data"]> {
    const res = await axiosInstance.get<ArchivedNoteViewResponse>(
      `/api/notes/archived/${noteId}`
    );

    if (!res.data.success) {
      throw new Error(res.data.error?.message || "지난 노트를 불러오지 못했습니다");
    }
    return res.data.data;
  },
};