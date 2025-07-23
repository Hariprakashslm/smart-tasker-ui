// src/components/DynamicForm.stories.tsx
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { DynamicForm } from '@core/DynamicForm';
import { ButtonProps, FormField } from '@/packages/core';

const meta: Meta<typeof DynamicForm> = {
  title: 'Packages/Core/DynamicForm',
  component: DynamicForm,
};

export default meta;

const fields: FormField[] = [
  {
    name: 'name',
    label: 'Full Name',
    type: 'text',
    placeholder: 'John Doe',
    colSpan: 2,
    validation: { required: true },
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    colSpan: 1,
    validation: {
      required: true,
      pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    },
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
    colSpan: 1,
    validation: { required: true, minLength: 6 },
  },
  {
    name: 'role',
    label: 'Role',
    type: 'select',
    options: [
      { label: 'Admin', value: 'admin' },
      { label: 'Editor', value: 'editor' },
      { label: 'Viewer', value: 'viewer' },
    ],
    colSpan: 2,
    validation: { required: true },
  },
  {
    name: 'bio',
    label: 'Bio',
    type: 'textarea',
    colSpan: 2,
  },
  {
    name: 'terms',
    label: 'Terms',
    type: 'checkbox',
    placeholder: 'I agree to the terms',
    colSpan: 2,
    defaultValue: false,
    validation: { required: true },
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
    label: 'Reset Form',
    size: 'medium',
    type: 'reset',
    variant: 'outlined',
    onClick: () => console.log('Reset clicked'),
    disabled: true,
  },
];

const handleSubmit = (data: Record<string, any>) => {
  alert(JSON.stringify(data, null, 2));
};

type Story = StoryObj<typeof DynamicForm>;

export const Default: Story = {
  args: {
    fields,
    onSubmit: handleSubmit,
    buttons: mockButtons,
  },
};
