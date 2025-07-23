import type { TaskData } from '../../components/TaskModal/types';
import type { ActivityItemProps } from '@activity/ActivityItem/types';

export interface TaskDetailsPageProps {
  task: TaskData;
  activity: ActivityItemProps[];
  onEditTask?: (task: TaskData) => void;
  allAssignees?: { id: string; name: string }[];
  availableLabels?: { label: string; value: string }[];
  className?: string;
  style?: React.CSSProperties;
} 