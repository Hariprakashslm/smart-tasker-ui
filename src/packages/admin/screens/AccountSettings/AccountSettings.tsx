// src/ui/admin/AccountSettings.tsx
import React from 'react';
import { Card } from '@core/Card';
import { DynamicForm, FormField } from '@core/DynamicForm'; // Adjust path as needed
import './AccountSettings.css';
import { ButtonProps } from '@core/Button/Button';
import { AccountSettingsProps } from './types';

export const AccountSettings: React.FC<AccountSettingsProps> = ({
  initialName,
  initialEmail,
  onSave,
  onDeactivate,
}) => {
  const fields: FormField[] = [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      defaultValue: initialName,
      colSpan: 1,
      validation: { required: true },
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      defaultValue: initialEmail,
      colSpan: 1,
      validation: {
        required: true,
        pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
      },
    },
    {
      name: 'password',
      label: 'New Password',
      type: 'password',
      placeholder: 'Leave blank to keep current password',
      colSpan: 2,
    },
  ];

  const mockButtons: ButtonProps[] = [
    {
      label: 'Save Changes',
      size: 'medium',
      type: 'submit',
      variant: 'contained',
      onClick: () => console.log('Save clicked'),
      disabled: false,
    },
    {
      label: 'Deactivate Account',
      size: 'small',
      type: 'reset',
      variant: 'outlined',
      onClick: () => onDeactivate?.(),
      disabled: true,
    },
  ];
  const handleSubmit = (data: Record<string, any>) => {
    const payload = {
      name: data.name,
      email: data.email,
      password: data.password?.trim() ? data.password : undefined,
    };
    onSave(payload);
  };

  return (
    <Card>
      <DynamicForm
        fields={fields}
        onSubmit={handleSubmit}
        buttons={mockButtons}
      />
    </Card>
  );
};
