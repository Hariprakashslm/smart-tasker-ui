export interface LoginScreenProps {
  onLogin?: (email: string, password: string) => void;
  onNavigate?: (screen: 'signup' | 'forgot') => void;
} 