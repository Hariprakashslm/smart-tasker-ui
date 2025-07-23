export interface TypingUser {
  id: string;
  name: string;
  avatarUrl?: string;
}

export interface TypingIndicatorProps {
  users: TypingUser[];
  maxAvatars?: number;
} 