// src/types/todayNote.ts
// 오늘의 노트 타입 정의

/**
 * 공통 타입 정의
 * cover           : 표지
 * creatorBase     : 작가 정보
 * externalLink    : 외부 링크
 */

export interface Cover {
  title: string;
  teaser: string;
  mainImageUrl: string;
  creatorName: string;
  publishedAt: string;
}

export interface CreatorBase {
  id: number;
  name: string;
  profileImageUrl: string;
}

export interface ExternalLink {
  sourceUrl?: string;
}

/**
 * 디테일 타입 정의
 * overview          : 개요
 * restropect        : 회고
 * processes         : 본문
 * question          : 질문 
 * answer            : 답변
 * creatorDetail     : 작가 상세정보
 */

export interface Overview {
  sectionTitle: string;
  bodyText: string;
  imageUrl: string;
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
  questionText: string;
}
 
export interface Answer {
  answerText: string;
}

export interface CreatorDetail extends CreatorBase {
  bio: string;
  instagramUrl?: string | null;
  youtubeUrl?: string | null;
  behanceUrl?: string | null;
  xUrl?: string | null;
  blogUrl?: string | null;
  newsUrl?: string | null;
}

/**
 * 프리뷰 타입 정의
 */

export interface OverviewPreview {
  sectionTitle: string;
  bodyPreview: string;
  imageUrl: string;
}

export interface TodayNotePreview {
  id: number;
  cover: Cover;
  overviewPreview: OverviewPreview;
  externalLink?: ExternalLink;
  creator: CreatorBase;
}

/**
 * 디테일 타입 정의
 */

export interface TodayNoteDetail {
  accessible: boolean;
  note: {
    id: number;
    status: string;
    tagText: string;
    cover: Cover;
    overview: Overview;
    retrospect: Retrospect;
    processes: Process[];
    question: Question;
    answer: Answer;
    creatorId: number;
    externalLink?: ExternalLink;
    creator: CreatorDetail;
    publishedAt: string;
    archivedAt: string | null;
    createdAt: string;
    updatedAt: string;
  };
  preview: null;
}