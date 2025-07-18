export interface Integration {
  id: string;
  name: string;
  icon: string;
  connected: boolean;
}

export interface AppSettings {
  language: string;
  timezone: string;
  theme: string;
}

export interface IntegrationsSettingsProps {
  integrations: Integration[];
  settings: AppSettings;
  onConnect?: (id: string) => void;
  onDisconnect?: (id: string) => void;
  onUpdateSetting?: (key: keyof AppSettings, value: string) => void;
} 