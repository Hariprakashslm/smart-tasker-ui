export interface ProjectCardProps {
  name: string;
  description?: string;
  status?: 'active' | 'archived' | 'draft';
  owner?: {
    name: string;
    imageUrl?: string;
  };
  onClick?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
} 