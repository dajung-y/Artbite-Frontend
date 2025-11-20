import type { APIResponse } from "./common";

export interface ArchivedCotent {
  id: number;
  tagText: string;
  title: string;
  mainImageUrl: string;
  creatorName: string;
  publishedDate: string;
}

export interface ArchviedData {
  totalElements: number;
  totalPages: number;
  size: number;
  content: ArchivedCotent[];
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  numberOfElements: number;
  pageable: {
    offset: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    paged: boolean;
    pageNumber: number;
    pageSize: number;
    unpage: boolean;
  };
  first: boolean;
  last: boolean;
  empty: boolean;
}

export type ArchivedNoteSummaryResponse = APIResponse<ArchviedData>;