import React from 'react';
import { Badge } from '@core/Badge';
import { Button } from '@core/Button';
import { Select } from '@core/Select';
import { TaskDependency } from '../TaskModal';
import './TaskDependenciesTab.css';

export interface TaskDependenciesTabProps {
  dependencies: TaskDependency[];
  availableTasks: TaskDependency[];
  mode: 'create' | 'edit' | 'view';
  onAddDependency: (dependency: TaskDependency) => void;
  onRemoveDependency: (dependencyId: string) => void;
}

export const TaskDependenciesTab: React.FC<TaskDependenciesTabProps> = ({
  dependencies,
  availableTasks,
  mode,
  onAddDependency,
  onRemoveDependency,
}) => {
  const isReadOnly = mode === 'view';

  const availableTasksForSelection = availableTasks.filter(
    task => !dependencies.find(d => d.id === task.id)
  );

  return (
    <div className="task-dependencies-tab">
      <h4>Dependencies</h4>
      
      {dependencies.length > 0 ? (
        <div className="task-dependencies-list">
          {dependencies.map(dep => (
            <div key={dep.id} className="task-dependency-item">
              <Badge 
                text={dep.status} 
                type={dep.status === 'done' ? 'success' : 'default'} 
              />
              <span className="task-dependency-title">{dep.title}</span>
              {!isReadOnly && (
                <Button
                  variant="ghost"
                  size="small"
                  onClick={() => onRemoveDependency(dep.id)}
                  label="Remove"
                />
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="task-no-dependencies">No dependencies added</p>
      )}

      {!isReadOnly && availableTasksForSelection.length > 0 && (
        <div className="task-add-dependency">
          <Select
            label="Add Dependency"
            value=""
            onChange={(value) => {
              const task = availableTasks.find(t => t.id === value);
              if (task) {
                onAddDependency(task);
              }
            }}
            options={availableTasksForSelection.map(task => ({ 
              value: task.id, 
              label: task.title 
            }))}
            placeholder="Select a task..."
          />
        </div>
      )}
    </div>
  );
}; 