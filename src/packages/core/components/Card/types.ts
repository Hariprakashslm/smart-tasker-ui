export interface CardProps {
  title?: string;
  content?: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  imageUrl?: string;
  image?: React.ReactNode;
  imageAlt?: string;
  imageStyle?: React.CSSProperties;
  shadow?: boolean;
  borderRadius?: number | string;
  background?: string;
  padding?: string | number;
  className?: string;
  style?: React.CSSProperties;
  titleClassName?: string;
  contentClassName?: string;
  footerClassName?: string;
  ariaLabel?: string;
  role?: string;
  children?: React.ReactNode;
} 