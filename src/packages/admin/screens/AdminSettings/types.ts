export interface SettingItem {
  label: string;
  description?: string;
  type: 'toggle' | 'text' | 'select';
  value: any;
  options?: string[]; // for select
  onChange: (value: any) => void;
}

export interface AdminSettingsProps {
  title?: string;
  settings: SettingItem[];
} 