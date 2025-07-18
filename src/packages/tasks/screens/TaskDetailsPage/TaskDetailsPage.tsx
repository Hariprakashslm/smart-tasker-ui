import React, { useState } from 'react';
import { TaskModal } from '../../components/TaskModal/TaskModal';
import { TaskCard } from '../../components/TaskCard/TaskCard';
import { ActivityItem } from '@activity/ActivityItem';
import { AttachmentPreview } from '../../components/AttachmentPreview/AttachmentPreview';
import { TaskData } from '../../components/TaskModal/types';
import { ActivityItemProps } from '@activity/ActivityItem/types';
import './TaskDetailsPage.css';

export interface TaskDetailsPageProps {
  task: TaskData;
  activity: ActivityItemProps[];
  onEditTask?: (task: TaskData) => void;
  allAssignees?: { id: string; name: string }[];
  availableLabels?: { label: string; value: string }[];
  className?: string;
  style?: React.CSSProperties;
}

export const TaskDetailsPage: React.FC<TaskDetailsPageProps> = ({
  task,
  activity,
  onEditTask,
  allAssignees = [],
  availableLabels = [],
  className = '',
  style = {},
}) => {
  const [editOpen, setEditOpen] = useState(false);

  if (!task) {
    return <div className="task-details-page">No task selected.</div>;
  }

  return (
    <div
      className={['task-details-page', className].filter(Boolean).join(' ')}
      style={style}
    >
      <div className="task-details-main">
        <TaskCard
          title={task.title!}
          description={task.description}
          dueDate={task.dueDate}
          status={task.status}
          assignee={{
            name: allAssignees.find((a) => a.id === task.assignee)?.name || '',
            imageUrl: undefined,
          }}
          completed={task.status === 'done'}
          onToggleComplete={() => {}}
        />
        <button className="edit-task-btn" onClick={() => setEditOpen(true)}>
          Edit Task
        </button>
        <div className="task-details-section">
          <h4>Attachments</h4>
          <AttachmentPreview attachments={task.attachments!} />
        </div>
        <div className="task-details-section">
          <h4>Activity</h4>
          <div className="task-activity-feed">
            {activity.map((item, idx) => (
              <ActivityItem key={idx} {...item} />
            ))}
          </div>
        </div>
      </div>
      {editOpen && (
        <TaskModal
          isOpen={editOpen}
          onClose={() => setEditOpen(false)}
          mode="edit"
          initialData={task}
          allAssignees={allAssignees}
          availableLabels={availableLabels}
          onSave={async () => {
            setEditOpen(false);
            if (onEditTask) onEditTask(task);
          }}
        />
      )}
    </div>
  );
};
