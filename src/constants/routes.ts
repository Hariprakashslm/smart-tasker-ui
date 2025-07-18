// Route constants

export const ROUTES = {
  // Public routes
  public: {
    home: '/',
    login: '/login',
    register: '/register',
    forgotPassword: '/forgot-password',
    resetPassword: '/reset-password',
    verifyEmail: '/verify-email',
  },
  // Protected routes
  protected: {
    dashboard: '/dashboard',
    profile: '/profile',
    settings: '/settings',
  },
  // Task routes
  tasks: {
    list: '/tasks',
    create: '/tasks/create',
    edit: (id: string) => `/tasks/${id}/edit`,
    view: (id: string) => `/tasks/${id}`,
    myTasks: '/tasks/my-tasks',
  },
  // Project routes
  projects: {
    list: '/projects',
    create: '/projects/create',
    edit: (id: string) => `/projects/${id}/edit`,
    view: (id: string) => `/projects/${id}`,
    board: (id: string) => `/projects/${id}/board`,
    settings: (id: string) => `/projects/${id}/settings`,
  },
  // Board routes
  boards: {
    list: '/boards',
    create: '/boards/create',
    edit: (id: string) => `/boards/${id}/edit`,
    view: (id: string) => `/boards/${id}`,
  },
  // Admin routes
  admin: {
    dashboard: '/admin',
    users: '/admin/users',
    projects: '/admin/projects',
    settings: '/admin/settings',
    logs: '/admin/logs',
  },
  // File routes
  files: {
    list: '/files',
    upload: '/files/upload',
    view: (id: string) => `/files/${id}`,
  },
  // Notification routes
  notifications: {
    list: '/notifications',
    settings: '/notifications/settings',
  },
} as const;

export const ROUTE_NAMES = {
  HOME: 'Home',
  LOGIN: 'Login',
  REGISTER: 'Register',
  DASHBOARD: 'Dashboard',
  TASKS: 'Tasks',
  PROJECTS: 'Projects',
  BOARDS: 'Boards',
  FILES: 'Files',
  NOTIFICATIONS: 'Notifications',
  PROFILE: 'Profile',
  SETTINGS: 'Settings',
  ADMIN: 'Admin',
} as const;

export const ROUTE_PERMISSIONS = {
  // Public routes - no authentication required
  public: [
    ROUTES.public.home,
    ROUTES.public.login,
    ROUTES.public.register,
    ROUTES.public.forgotPassword,
    ROUTES.public.resetPassword,
    ROUTES.public.verifyEmail,
  ],
  // User routes - requires authentication
  user: [
    ROUTES.protected.dashboard,
    ROUTES.protected.profile,
    ROUTES.protected.settings,
    ROUTES.tasks.list,
    ROUTES.tasks.create,
    ROUTES.tasks.myTasks,
    ROUTES.projects.list,
    ROUTES.projects.create,
    ROUTES.boards.list,
    ROUTES.boards.create,
    ROUTES.files.list,
    ROUTES.files.upload,
    ROUTES.notifications.list,
    ROUTES.notifications.settings,
  ],
  // Admin routes - requires admin role
  admin: [
    ROUTES.admin.dashboard,
    ROUTES.admin.users,
    ROUTES.admin.projects,
    ROUTES.admin.settings,
    ROUTES.admin.logs,
  ],
} as const;

export const BREADCRUMB_ROUTES = {
  [ROUTES.protected.dashboard]: [ROUTE_NAMES.HOME, ROUTE_NAMES.DASHBOARD],
  [ROUTES.tasks.list]: [ROUTE_NAMES.HOME, ROUTE_NAMES.TASKS],
  [ROUTES.projects.list]: [ROUTE_NAMES.HOME, ROUTE_NAMES.PROJECTS],
  [ROUTES.boards.list]: [ROUTE_NAMES.HOME, ROUTE_NAMES.BOARDS],
  [ROUTES.files.list]: [ROUTE_NAMES.HOME, ROUTE_NAMES.FILES],
  [ROUTES.notifications.list]: [ROUTE_NAMES.HOME, ROUTE_NAMES.NOTIFICATIONS],
  [ROUTES.protected.profile]: [ROUTE_NAMES.HOME, ROUTE_NAMES.PROFILE],
  [ROUTES.protected.settings]: [ROUTE_NAMES.HOME, ROUTE_NAMES.SETTINGS],
  [ROUTES.admin.dashboard]: [ROUTE_NAMES.HOME, ROUTE_NAMES.ADMIN, ROUTE_NAMES.DASHBOARD],
} as const; 