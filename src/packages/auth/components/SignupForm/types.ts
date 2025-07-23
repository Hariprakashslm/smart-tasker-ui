import type { OAuthProvider } from '../OAuthButtons/types';

export interface SignupFormProps {
  onSubmit: (data: { name: string; email: string; password: string }) => void;
  onCancel?: () => void;
  showOAuth?: boolean;
  oauthProviders?: OAuthProvider[];
} 