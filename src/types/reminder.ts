import type { APIResponse } from "./common";

export interface ReminderData {
  surfaceHint: "DEFERRED" | "BANNER" | "NONE";
  payload: {
    noteId: number;
    title: string;
    mainImageUrl: string;
    sourceType: "BOOKMARK" | "ANSWER";
    reminderDate: string;
    dismissed: boolean;
    firstVisitAt?: string;
    bannerSeenAt?: string;
  }
};

export type NoteReminderResponse = APIResponse<ReminderData>;