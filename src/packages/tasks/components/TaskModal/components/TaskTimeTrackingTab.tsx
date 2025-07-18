import React from 'react';
import { TaskData } from '../TaskModal';
import './TaskTimeTrackingTab.css';

export interface TaskTimeTrackingTabProps {
  formData: TaskData;
}

export const TaskTimeTrackingTab: React.FC<TaskTimeTrackingTabProps> = ({
  formData,
}) => {
  const estimatedHours = formData.estimatedHours || 0;
  const actualHours = formData.actualHours || 0;
  const remainingHours = Math.max(0, estimatedHours - actualHours);

  return (
    <div className="task-time-tracking-tab">
      <h4>Time Tracking</h4>
      <div className="task-time-stats">
        <div className="task-time-stat">
          <span className="task-time-label">Estimated:</span>
          <span className="task-time-value">{estimatedHours}h</span>
        </div>
        <div className="task-time-stat">
          <span className="task-time-label">Actual:</span>
          <span className="task-time-value">{actualHours}h</span>
        </div>
        <div className="task-time-stat">
          <span className="task-time-label">Remaining:</span>
          <span className="task-time-value">{remainingHours}h</span>
        </div>
      </div>
      
      {estimatedHours > 0 && (
        <div className="task-time-progress">
          <div className="task-time-progress-bar">
            <div 
              className="task-time-progress-fill"
              style={{ 
                width: `${Math.min(100, (actualHours / estimatedHours) * 100)}%` 
              }}
            />
          </div>
          <span className="task-time-progress-text">
            {Math.round((actualHours / estimatedHours) * 100)}% complete
          </span>
        </div>
      )}
    </div>
  );
}; 