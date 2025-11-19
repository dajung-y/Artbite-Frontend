import type { AnswerRequest, AnswerResponse, DeleteAnswerResponse } from "../types/answer";
import axiosInstance from "./axiosInstance";

export const answerApi = {

  getAnswer: async (questionId: number): Promise<AnswerResponse> => {
    const res = await axiosInstance.get<AnswerResponse>(
      `/api/notes/questions/${questionId}/answer`
    );
    return res.data;
  },
  postAnswer: async (questionId: number, req: AnswerRequest): Promise<AnswerResponse> => {
    const res = await axiosInstance.post<AnswerResponse>(
      `/api/notes/questions/${questionId}/answer`, req
    );
    return res.data;
  },
  putAnswer: async (questionId: number, req: AnswerRequest): Promise<AnswerResponse> => {
    const res = await axiosInstance.put<AnswerResponse>(
      `/api/notes/questions/${questionId}/answer`, req
    );
    return res.data;
  },
  deleteAnswer: async (questionId: number): Promise<DeleteAnswerResponse> => {
    const res = await axiosInstance.delete<DeleteAnswerResponse>(
      `/api/notes/questions/${questionId}/answer`
    );
    return res.data;
  },
}