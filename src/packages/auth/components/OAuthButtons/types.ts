export interface OAuthProvider {
  id: 'google' | 'github' | 'facebook';
  label: string;
  icon?: React.ReactNode;
  onClick: () => void;
}

export interface OAuthButtonsProps {
  providers: OAuthProvider[];
} 