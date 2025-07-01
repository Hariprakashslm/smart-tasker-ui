// src/ui/tasks/ActivityTimeline.tsx
import React from 'react';
import './ActivityTimeline.css';
import { ActivityItem, ActivityItemProps } from '../ActivityItem';

export interface ActivityTimelineProps {
  history: ActivityItemProps[];
}

export const ActivityTimeline: React.FC<ActivityTimelineProps> = ({
  history,
}) => {
  if (!history.length) {
    return <p className="timeline-empty">No activity yet.</p>;
  }

  return (
    <div className="activity-timeline">
      {history.map((item, index) => (
        <div key={index} className="timeline-entry">
          <div className="timeline-dot" />
          <ActivityItem {...item} />
        </div>
      ))}
    </div>
  );
};
