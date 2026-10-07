import * as pg from '@/pages';
import type { RouteObject } from 'react-router-dom';

// Block routes start ---
export const blockRoutes: RouteObject[] = [
  { path: 'dashboard', element: <pg.AppBlockDashboard /> },
];
// Block routes end ---

//

// Circle routes start ---
export const circleRoutes: RouteObject[] = [
  { path: 'dashboard', element: <pg.AppCircleDashboard /> },
];
// Circle routes end ---

//

// CMS routes start ---
export const cmsRoutes: RouteObject[] = [
  { path: 'dashboard', element: <pg.AppCmsDashboard /> },
];
// CMS routes end ---

//

// District routes start ---
export const districtRoutes: RouteObject[] = [
  { path: 'dashboard', element: <pg.AppDistrictDashboard /> },
];
// District routes end ---

//

// School routes start ---
export const schoolRoutes: RouteObject[] = [
  { path: 'dashboard', element: <pg.AppSchoolDashboard /> },
  { path: 'students', element: <pg.AppStudentList /> },
];
// School routes end ---

//

// State routes start ---
export const stateRoutes: RouteObject[] = [
  { path: 'dashboard', element: <pg.AppStateDashboard /> },
];
// State routes end ---

//

// Supplier routes start ---
export const supplierRoutes: RouteObject[] = [
  { path: 'dashboard', element: <pg.AppSupplierDashboard /> },
];
// Supplier routes end ---
