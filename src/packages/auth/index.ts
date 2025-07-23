import { ForgotPasswordScreen } from './screens/ForgotPasswordScreen';
import { LoginScreen } from './screens/LoginScreen';
import { ResetPasswordScreen } from './screens/ResetPasswordScreen';
import { SignupScreen } from './screens/SignupScreen';

export { AuthLayout } from './components/AuthLayout';
export { LoginForm } from './components/LoginForm';
export { OAuthButtons } from './components/OAuthButtons';
export { SignupForm } from './components/SignupForm';

export const screens = {
  ForgotPasswordScreen,
  LoginScreen,
  ResetPasswordScreen,
  SignupScreen,
};

// Type exports
export type { AuthLayoutProps } from './components/AuthLayout/types';
export type { ForgotPasswordProps } from './components/ForgotPassword/types';
export type { LoginFormProps } from './components/LoginForm/types';
export type { OAuthProvider, OAuthButtonsProps } from './components/OAuthButtons/types';
export type { ResetPasswordProps } from './components/ResetPassword/types';
export type { SignupFormProps } from './components/SignupForm/types';
export type { ForgotPasswordScreenProps } from './screens/ForgotPasswordScreen/types';
export type { LoginScreenProps } from './screens/LoginScreen/types';
export type { ResetPasswordScreenProps } from './screens/ResetPasswordScreen/types';
export type { SignupScreenProps } from './screens/SignupScreen/types';
