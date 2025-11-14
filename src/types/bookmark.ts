export interface BookmarkItem {
  id?: number;
  title: string;
  mainImageUrl: string;
  creatorName: string;
  creatorJobTitle: string;
}

export interface BookmarkResponse {
  success: boolean;
  data: BookmarkItem[];
  error: string | null;
  timestamp: string;
}