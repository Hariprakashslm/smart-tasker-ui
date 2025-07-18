import React from 'react';
import { Button } from '@core/Button';
import './TaskModalActions.css';

export interface TaskModalActionsProps {
  mode: 'create' | 'edit' | 'view';
  onClose: () => void;
  onSave: () => void;
  onDelete?: () => void;
  isSaving: boolean;
  isDeleting: boolean;
  canSave: boolean;
}

export const TaskModalActions: React.FC<TaskModalActionsProps> = ({
  mode,
  onClose,
  onSave,
  onDelete,
  isSaving,
  isDeleting,
  canSave,
}) => {
  if (mode === 'view') {
    return (
      <div className="task-modal-actions">
        <Button onClick={onClose} label="Close" />
      </div>
    );
  }

  return (
    <div className="task-modal-actions">
      {onDelete && (
        <Button
          variant="contained"
          onClick={onDelete}
          disabled={isDeleting}
          label={isDeleting ? 'Deleting...' : 'Delete'}
        />
      )}
      <Button onClick={onClose} label="Cancel" />
      <Button
        variant="contained"
        onClick={onSave}
        disabled={isSaving || !canSave}
        label={isSaving ? 'Saving...' : 'Save'}
      />
    </div>
  );
}; 