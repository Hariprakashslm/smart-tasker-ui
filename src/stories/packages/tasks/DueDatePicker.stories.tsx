// src/ui-stories/tasks/DueDateInput.stories.tsx
import React, { useState } from 'react';
import { DueDatePicker } from 'tasks/components/DueDatePicker';

export default {
  title: 'Packages/Tasks/DueDatePicker',
  component: DueDatePicker,
};

export const Default = () => {
  const [date, setDate] = useState('2025-06-30');

  return (
    <div style={{ width: '300px' }}>
      <DueDatePicker value={date} onChange={(newDate) => setDate(newDate)} />
    </div>
  );
};
