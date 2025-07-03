// src/ui/tasks/LabelSelector.tsx
import React from 'react';
import { Select } from '@core/Select';
import { Badge } from '@core/Badge';
import { Checkbox } from '@core/Checkbox';
import './LabelSelector.css';
export interface LabelOption {
  label: string;
  value: string;
  color?: string;
}

export interface LabelSelectorProps {
  selectedLabels: string[];
  availableLabels: LabelOption[];
  onChange: (labels: string[]) => void;
}

export const LabelSelector: React.FC<LabelSelectorProps> = ({
  selectedLabels,
  availableLabels,
  onChange,
}) => {
  const toggleLabel = (value: string) => {
    const newSelection = selectedLabels.includes(value)
      ? selectedLabels.filter((v) => v !== value)
      : [...selectedLabels, value];
    onChange(newSelection);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '50px' }}>
      {availableLabels.map((label) => (
        <div
          key={label.value}
          style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
        >
          <Checkbox
            checked={selectedLabels.includes(label.value)}
            onChange={() => toggleLabel(label.value)}
          />
          <Badge text={label.label} color={label.color || 'gray'} />
        </div>
      ))}
    </div>
  );
};
