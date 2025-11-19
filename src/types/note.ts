// src/types/note.ts
// 오늘의 노트, 지난 노트 타입 정의

import type { APIResponse } from "./common";

export interface Cover {
  title: string;
  teaser: string;
  mainImageUrl: string;
  creatorName: string;
  creatorJobTitle: string;
  publishedDate: string;
  category: {
    type: string;
    label: string;
  }
}

export interface Overview {
  sectionTitle: string;
  bodyText: string;
  imageUrl: string
}

export interface Retrospect {
  sectionTitle: string;
  bodyText: string;
}

export interface Process {
  position: number;
  sectionTitle: string;
  bodyText: string;
  imageUrl: string;
}

export interface Question {
  id: number,
  questionText: string;
}

export interface Answer {
  answerText: string;
}

export interface ExternalLink {
  sourceUrl: string;
}

export interface Creator {
  id: number;
  name: string;
  bio?: string;
  jobTitle?: string;
  profileImageUrl?: string;
  instagramUrl?: string;
  youtubeUrl?: string;
  behanceUrl?: string;
  xUrl?: string;
  blogUrl?: string;
  newsUrl?: string;
}

export interface NoteDetail {
  id: number;
  status: string;
  tagText: string;
  cover: Cover;
  overview: Overview;
  retrospect: Retrospect;
  processes: Process[];
  question: Question;
  answer?: Answer;
  creatorId: number;
  creatorJobTitle: string;
  externalLink?: ExternalLink;
  creator: Creator;
  publishedAt: string;
  archivedAt?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface NotePreview {
  id: number;
  cover: Cover;
  overview: Overview;
}

// 오늘/지난 상세 노트 공통 data 타입
export interface NoteData {
  accessible: boolean;
  note?: NoteDetail | null;
  preview?: NotePreview | null;
}



/**
 * 엔드포인트별 타입
 * 
 * 오늘노트 커버        : NoteCoverResponse
 * 오늘노트 상세        : TodayPublilshedResponse
 * 오늘노트 프리뷰      : NotePreviewResponse
 * 지난노트 상세/프리뷰  : ArchivedNoteViewResponse
 */

export type NoteCoverResponse = APIResponse<Cover>
export type TodayPublishedResponse = APIResponse<NoteData>
export type NotePreviewResponse = APIResponse<NotePreview>
export type ArchivedNoteViewResponse = APIResponse<NoteData>
