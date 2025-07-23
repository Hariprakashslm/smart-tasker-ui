export interface ForgotPasswordProps {
  onSubmit: (email: string) => Promise<void>;
  onBackToLogin?: () => void;
} 