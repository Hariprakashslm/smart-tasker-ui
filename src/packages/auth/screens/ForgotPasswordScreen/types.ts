export interface ForgotPasswordScreenProps {
  onSendReset?: (email: string) => void;
  onNavigate?: (screen: 'login') => void;
} 