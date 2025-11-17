import { mockTodayCover } from "../mocks/mockTodayCover";
import { mockTodayDetail } from "../mocks/mockTodayDetail";
import { mockTodayPreview } from "../mocks/mockTodayPreview";
import type { ArchivedNoteViewResponse, NoteCoverResponse, NotePreviewResponse, TodayPublishedResponse } from "../types/note";

export const mockNoteApi = {
  // 오늘의 작업노트 커버
  async getTodayCover(): Promise<NoteCoverResponse["data"]>{
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockTodayCover.data ?? null);
      },300);
    });
  },

  // 오늘의 작업노트 프리뷰
  async getTodayPreview() : Promise<NotePreviewResponse["data"]>{
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockTodayPreview.data);
      },300);
    });
  },

  // 오늘의 작업노트 디테일
  async getTodayDetail(): Promise<TodayPublishedResponse["data"]>{
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockTodayDetail.data);
      },300);
    });
  },

    // 지난노트 디테일
    async getArchivedNote(noteId: number): Promise<ArchivedNoteViewResponse["data"]>{
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log(noteId);
          resolve(mockTodayDetail.data);
        },300);
      });
    },


}