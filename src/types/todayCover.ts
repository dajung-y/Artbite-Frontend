export interface Cover {
  title: string;
  teaser: string;
  mainImageUrl: string;
  creatorName: string;
  creatorJobTitle: string;
  publishedDate: string;
}

export interface NoteCoverResponse {
  success: boolean;
  data: Cover;
  error: string | null;
  timestamp: string;
}