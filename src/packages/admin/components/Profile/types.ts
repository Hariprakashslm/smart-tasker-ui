export interface ProfileProps {
  name: string;
  email: string;
  role: string;
  bio?: string;
  avatarUrl?: string;
  editable?: boolean;
  onEdit?: () => void;
} 