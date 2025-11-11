// src/types/todayNote.ts
// 노트 타입 정의

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

// 오늘노트 상세 응답
export interface TodayPublishedResponse {
  success: boolean;
  data: TodayNoteDetail;
  error: string | null;
  timestamp: string;
}

/**
 * 프리뷰 타입 정의
 */

export interface TodayNotePreview {
  id: number;
  cover: Cover;
  overviewPreview: OverviewPreview;
  externalLink?: ExternalLink;
  creator: CreatorBase;
}

// 오늘노트 미리보기 응답

export interface NotePreviewResponse {
  success: boolean;
  data: TodayNotePreview;
  error: string | null;
  timestamp: string;
}


/**
 * 지난 노트
 */

// 지난노트 디테일 데이터
export interface ArchivedNoteDetail {
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
  externalLink: ExternalLink;
  creator: CreatorBase;
  publishedAt: string;
  archivedAt: string;
  createdAt: string;
  updatedAt: string;
}

// 지난 노트 상세 응답
export interface NoteResponse {
  success: boolean;
  data: ArchivedNoteDetail;
  error: string | null;
  timestamp: string;
}