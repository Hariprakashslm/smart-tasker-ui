// src/ui/tasks/TaskHistory.tsx
import React from 'react';
import './TaskHistory.css';

export interface HistoryItem {
  id: string;
  user: string;
  action: string;
  timestamp: string; // ISO string
}

export interface TaskHistoryProps {
  history: HistoryItem[];
}

export const TaskHistory: React.FC<TaskHistoryProps> = ({ history }) => {
  if (history.length === 0) {
    return <p className="task-history-empty">No history yet.</p>;
  }

  return (
    <div className="task-history">
      {history.map((item) => (
        <div key={item.id} className="task-history-item">
          <div className="task-history-message">
            <strong>{item.user}</strong> {item.action}
          </div>
          <div className="task-history-time">
            {new Date(item.timestamp).toLocaleString()}
          </div>
        </div>
      ))}
    </div>
  );
};
