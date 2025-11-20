import type { NoteReminderResponse } from "../types/reminder";
import axiosInstance from "./axiosInstance";

export const ReminderApi = {
  getTodayReminder: async (): Promise<NoteReminderResponse> => {
    const res = await axiosInstance.get<NoteReminderResponse>(
      '/api/notes/reminder/today'
    );
    return res.data;
  },
  postDismissReminder: async (): Promise<void> => {
    await axiosInstance.post('/api/notes/reminder/dismiss');
  },
}