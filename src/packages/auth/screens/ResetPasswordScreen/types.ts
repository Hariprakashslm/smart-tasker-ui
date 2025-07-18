export interface ResetPasswordScreenProps {
  onReset?: (password: string) => void;
  onNavigate?: (screen: 'login') => void;
} 