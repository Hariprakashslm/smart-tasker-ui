export interface NotificationOption {
  label: string;
  description?: string;
  enabled: boolean;
  onToggle: (value: boolean) => void;
}

export interface NotificationSettingsProps {
  options: NotificationOption[];
}
