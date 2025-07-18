export interface SignupScreenProps {
  onSignup?: (name: string, email: string, password: string) => void;
  onNavigate?: (screen: 'login' | 'forgot') => void;
} 