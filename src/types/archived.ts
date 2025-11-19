export interface HistoryItems {
  id: number;
  tagText: string;
  title: string;
  mainImageUrl: string;
  publishedAt: string;
  creatorName: string;
}

export interface Pageable {
  pageNumber: number;
  pageSize: number;
  offset: number;
}

export interface HistoryResponse {
  success: boolean;
  data: {
    content: HistoryItems[];
    pageable: Pageable;
    totalElements: number;
    totalPages: number;
    last: boolean;
    first: boolean;
  };
  error: string | null;
  timestamp: string;
}