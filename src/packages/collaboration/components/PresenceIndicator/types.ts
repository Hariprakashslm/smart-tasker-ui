export interface PresenceUser {
  id: string;
  name: string;
  avatarUrl?: string;
}

export interface PresenceIndicatorProps {
  users: PresenceUser[];
  maxAvatars?: number;
  label?: string;
} 