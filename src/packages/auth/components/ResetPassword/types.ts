export interface ResetPasswordProps {
  token: string;
  onSubmit: (data: { token: string; password: string }) => Promise<void>;
  onLoginRedirect?: () => void;
} 