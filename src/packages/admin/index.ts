import { AccountSettings } from './screens/AccountSettings';
import { AdminDashboard } from './screens/AdminDashboard';
import { AdminSettings } from './screens/AdminSettings';
import { AuditLogs } from './screens/AuditLogs';
import { IntegrationsSettings } from './screens/IntegrationsSettings';
import { ProfilePage } from './screens/ProfilePage';
import { ReportsAnalytics } from './screens/ReportsAnalytics';

export * from './components/AlertsPanel';
export * from './components/ErrorRateGraph';
export * from './components/LogViewer';
export * from './components/UserTable';

export const screens = {
  AccountSettings,
  AdminDashboard,
  AdminSettings,
  AuditLogs,
  IntegrationsSettings,
  ProfilePage,
  ReportsAnalytics,
};

// Type exports
export type { AlertItem, AlertsPanelProps } from './components/AlertsPanel/types';
export type { ErrorRatePoint, ErrorRateGraphProps } from './components/ErrorRateGraph/types';
export type { LogEntry, LogViewerProps } from './components/LogViewer/types';
export type { NotificationOption, NotificationSettingsProps } from './components/NotificationSettings/types';
export type { User, UserTableProps } from './components/UserTable/types';
export type { ProfileProps } from './components/Profile/types';
export type { SettingItem, AdminSettingsProps } from './screens/AdminSettings/types';
export type { AccountSettingsProps } from './screens/AccountSettings/types';
export type { DashboardStats, RecentActivity, AdminDashboardProps } from './screens/AdminDashboard/types';
export type { AuditLogEntry, AuditLogsProps } from './screens/AuditLogs/types';
export type { Integration, AppSettings, IntegrationsSettingsProps } from './screens/IntegrationsSettings/types';
export type { UserProfile, ProfilePageProps } from './screens/ProfilePage/types';
export type { SummaryItem, BarChartData, LineChartData, PieChartData, ReportsAnalyticsProps } from './screens/ReportsAnalytics/types';
