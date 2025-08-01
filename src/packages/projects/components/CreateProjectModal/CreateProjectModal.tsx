// src/ui/projects/CreateProjectModal.tsx
import React, { useState, useEffect } from 'react';
import { Modal } from '@core/Modal';
import { Input } from '@core/Input';
import { Button } from '@core/Button';
import type { CreateProjectModalProps } from './types';

export const CreateProjectModal: React.FC<CreateProjectModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  // Clear fields when opened or closed
  useEffect(() => {
    if (isOpen) {
      setName('');
      setDescription('');
      setError('');
    }
  }, [isOpen]);

  const handleSubmit = () => {
    if (!name.trim()) {
      setError('Project name is required');
      return;
    }

    onSubmit({ name, description });
    onClose();
  };

  const modalBody = (
    <div
      className="create-project-content"
      style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
    >
      <Input
        label="Project Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        error={error}
      />

      <Input
        label="Description"
        placeholder="(optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <div
        style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}
      >
        <Button variant="outlined" label="Cancel" onClick={onClose} />
        <Button label="Create" onClick={handleSubmit} />
      </div>
    </div>
  );

  return (
    <Modal title="Create New Project" isOpen={isOpen} onClose={onClose} content={modalBody} />
  );
};
