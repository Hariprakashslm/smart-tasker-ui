export interface AccountSettingsProps {
  initialName: string;
  initialEmail: string;
  onSave: (data: { name: string; email: string; password?: string }) => void;
  onDeactivate?: () => void;
}
