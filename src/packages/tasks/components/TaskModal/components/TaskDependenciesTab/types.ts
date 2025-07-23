import type { TaskDependency } from '../../types';

export interface TaskDependenciesTabProps {
  dependencies: TaskDependency[];
  availableTasks: TaskDependency[];
  mode: 'create' | 'edit' | 'view';
  onAddDependency: (dependency: TaskDependency) => void;
  onRemoveDependency: (dependencyId: string) => void;
} 