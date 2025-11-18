import type { APIResponse } from "./common";

export interface AnswerRequest {
  answerText: string;
}

export interface AnswerData {
  answerText: string;
}

export type AnswerResponse = APIResponse<AnswerData>;
export type DeleteAnswerResponse = APIResponse<{}>;