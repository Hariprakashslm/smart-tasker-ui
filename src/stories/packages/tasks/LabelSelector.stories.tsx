// src/ui-stories/tasks/LabelSelector.stories.tsx
import React, { useState } from 'react';
import { LabelSelector, LabelOption } from '@tasks/LabelSelector';

export default {
  title: 'Packages/Tasks/LabelSelector',
  component: LabelSelector,
};

const availableLabels: LabelOption[] = [
  { label: 'Bug', value: 'bug', color: 'red' },
  { label: 'Feature', value: 'feature', color: 'blue' },
  { label: 'Urgent', value: 'urgent', color: 'orange' },
];

export const Default = () => {
  const [selectedLabels, setSelectedLabels] = useState<string[]>(['bug']);

  return (
    <LabelSelector
      selectedLabels={selectedLabels}
      availableLabels={availableLabels}
      onChange={(labels) => setSelectedLabels(labels)}
    />
  );
};
