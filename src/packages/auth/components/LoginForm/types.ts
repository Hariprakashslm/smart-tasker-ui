import type { OAuthProvider } from '../OAuthButtons/types';

export interface LoginFormProps {
  onSubmit: (data: { email: string; password: string }) => void;
  onCancel?: () => void;
  showOAuth?: boolean;
  oauthProviders?: OAuthProvider[];
} 