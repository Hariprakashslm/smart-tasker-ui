export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  notifications?: boolean;
  darkMode?: boolean;
}

export interface ProfilePageProps {
  user: UserProfile;
  onUpdateProfile?: (user: UserProfile) => void;
  onToggleDarkMode?: (enabled: boolean) => void;
  onUpdateNotifications?: (enabled: boolean) => void;
} 