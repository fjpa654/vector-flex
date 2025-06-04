// src/lib/constants.ts

export const APP_NAME = 'Vector Flex'

// User roles for potential role-based access control
export const USER_ROLES = {
  ADMIN: 'admin',
  TECHNICIAN: 'technician',
  MANAGER: 'manager',
} as const

// Application route paths
export const ROUTES = {
  LOGIN: '/login',
  DASHBOARD: '/dashboard',
  CUSTOMERS: '/customers',
  PRODUCTS: '/products',
  SERVICES: '/services',
  CALENDAR: '/calendar',
} as const

// Example: Default pagination settings
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 10,
  PAGE_SIZE_OPTIONS: [10, 20, 50, 100],
} as const

// Example: Theme keys
export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
} as const
