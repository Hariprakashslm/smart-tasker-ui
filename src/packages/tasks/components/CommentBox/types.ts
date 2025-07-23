export interface CommentBoxProps {
  onSubmit: (text: string) => void;
  userAvatarUrl?: string;
  placeholder?: string;
  disabled?: boolean;
  isSubmitting?: boolean;
} 