import * as pg from '@/pages';
import type { RouteObject } from 'react-router-dom';

export const websiteRoutes: RouteObject[] = [
  { index: true, element: <pg.WbHome /> },
  { path: 'about-scheme', element: <pg.WbAboutScheme /> },
  { path: 'impact-studies', element: <pg.WbImpactStudy /> },
  { path: 'reports', element: <pg.WbReports /> },
  { path: 'downloads', element: <pg.WbDownloads /> },
  { path: 'contact-us', element: <pg.WbContactUs /> },
];
