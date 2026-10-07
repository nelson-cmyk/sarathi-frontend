import * as pg from '@/pages';
import type { RouteObject } from 'react-router-dom';

export const authRoutes: RouteObject[] = [
  { path: 'stakeholder-signin', element: <pg.AppStakeholderLogin /> },
  { path: 'cms-signin', element: <pg.AppCmsLogin /> },
  { path: 'forgot-password', element: <pg.AppForgotPassword /> },
  { path: 'reset-password', element: <pg.AppResetPassword /> },
];
