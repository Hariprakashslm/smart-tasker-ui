import { NotificationsCenterPage } from './screens/NotificationsCenterPage';

export { EmailPreferenceToggle } from './components/EmailPreferenceToggle';
export { NotificationBell } from './components/NotificationBell';
export { NotificationDropdown } from './components/NotificationDropdown';
export { NotificationItem } from './components/NotificationItem';

export const screens = {
  NotificationsCenterPage,
};
// Type exports
export type { NotificationDropdownProps } from './components/NotificationDropdown/types';
export type { NotificationItemProps } from './components/NotificationItem/types';
export type { EmailPreferenceToggleProps } from './components/EmailPreferenceToggle/types';
export type { NotificationBellProps } from './components/NotificationBell/types';
export type { NotificationsCenterPageProps } from './screens/NotificationsCenterPage/types';
