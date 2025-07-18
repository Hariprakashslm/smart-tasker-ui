// Validation constants

export const VALIDATION_RULES = {
  // Password validation
  password: {
    minLength: 8,
    maxLength: 128,
    requireUppercase: true,
    requireLowercase: true,
    requireNumbers: true,
    requireSpecialChars: false,
  },
  // Username validation
  username: {
    minLength: 3,
    maxLength: 30,
    pattern: /^[a-zA-Z0-9_-]+$/,
  },
  // Email validation
  email: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  // Phone validation
  phone: {
    pattern: /^[\+]?[1-9][\d]{0,15}$/,
  },
  // URL validation
  url: {
    pattern: /^https?:\/\/.+/,
  },
  // File validation
  file: {
    maxSize: 10 * 1024 * 1024, // 10MB
    allowedTypes: [
      'image/jpeg',
      'image/png',
      'image/gif',
      'image/webp',
      'application/pdf',
      'text/plain',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ],
  },
} as const;

export const VALIDATION_MESSAGES = {
  required: 'This field is required.',
  email: 'Please enter a valid email address.',
  password: {
    minLength: 'Password must be at least 8 characters long.',
    maxLength: 'Password cannot exceed 128 characters.',
    requireUppercase: 'Password must contain at least one uppercase letter.',
    requireLowercase: 'Password must contain at least one lowercase letter.',
    requireNumbers: 'Password must contain at least one number.',
    requireSpecialChars: 'Password must contain at least one special character.',
  },
  username: {
    minLength: 'Username must be at least 3 characters long.',
    maxLength: 'Username cannot exceed 30 characters.',
    pattern: 'Username can only contain letters, numbers, underscores, and hyphens.',
  },
  phone: 'Please enter a valid phone number.',
  url: 'Please enter a valid URL.',
  file: {
    maxSize: 'File size cannot exceed 10MB.',
    type: 'File type not supported.',
  },
  minLength: (min: number) => `Must be at least ${min} characters long.`,
  maxLength: (max: number) => `Cannot exceed ${max} characters.`,
  min: (min: number) => `Must be at least ${min}.`,
  max: (max: number) => `Cannot exceed ${max}.`,
  pattern: 'Please enter a valid value.',
} as const;

export const FORM_VALIDATION_SCHEMAS = {
  login: {
    email: {
      required: true,
      type: 'email',
    },
    password: {
      required: true,
      minLength: 8,
    },
  },
  register: {
    username: {
      required: true,
      minLength: 3,
      maxLength: 30,
      pattern: /^[a-zA-Z0-9_-]+$/,
    },
    email: {
      required: true,
      type: 'email',
    },
    password: {
      required: true,
      minLength: 8,
      requireUppercase: true,
      requireLowercase: true,
      requireNumbers: true,
    },
    confirmPassword: {
      required: true,
      match: 'password',
    },
  },
  task: {
    title: {
      required: true,
      minLength: 1,
      maxLength: 200,
    },
    description: {
      maxLength: 1000,
    },
    dueDate: {
      type: 'date',
      min: () => new Date(),
    },
  },
  project: {
    name: {
      required: true,
      minLength: 1,
      maxLength: 100,
    },
    description: {
      maxLength: 500,
    },
  },
} as const; 