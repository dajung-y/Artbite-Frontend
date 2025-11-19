import type { ArchivedNoteSummaryResponse } from "../types/archived";
import axiosInstance from "./axiosInstance";

export const ArchivedApi = {
  getArchivedList: async (params?: {
    keyword?: string;
    page?: number;
    size?: number;
    sort?: string[];
  }) : Promise<ArchivedNoteSummaryResponse> => {
    const res = await axiosInstance.get<ArchivedNoteSummaryResponse>(
      '/api/notes/archived',
      {params}
    );
    return res.data;
  }
}