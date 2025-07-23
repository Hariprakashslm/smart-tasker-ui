export interface ProjectListProps {
  projects: {
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
  }[];
  onProjectClick?: (project: any) => void;
  onEditProject?: (project: any) => void;
  onDeleteProject?: (project: any) => void;
} 