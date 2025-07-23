export interface CommentItem {
  id: string;
  userName: string;
  userAvatarUrl?: string;
  text: string;
  timestamp: string;
}

export interface CommentThreadProps {
  initialComments: CommentItem[];
  currentUserAvatarUrl?: string;
  onNewComment?: (comment: CommentItem) => Promise<void>;
} 