import { Assignee } from '@/packages/tasks';
import { User } from '../../components/UserTable';

export interface TeamUsersPageProps {
  users: User[];
  assignees: Assignee[];
  onEditUser?: (user: User) => void;
  onDeleteUser?: (user: User) => void;
  onAssignTask?: (userId: string) => void;
  selectedAssigneeId?: string | null;
}
