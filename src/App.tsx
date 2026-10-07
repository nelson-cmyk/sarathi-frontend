import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { websiteRoutes } from './routes/website.route';
import * as pg from '@/pages';
import { authRoutes } from './routes/auth.route';
import {
  blockRoutes,
  circleRoutes,
  cmsRoutes,
  districtRoutes,
  schoolRoutes,
  stateRoutes,
  supplierRoutes,
} from './routes/authenticated.route';

const router = createBrowserRouter([
  {
    path: '/',
    element: <pg.WbLayout />,
    children: [...websiteRoutes],
  },
  {
    path: 'auth',
    children: [...authRoutes],
  },
  {
    path: 'block',
    children: [...blockRoutes],
  },
  {
    path: 'circle',
    children: [...circleRoutes],
  },
  {
    path: 'cms',
    children: [...cmsRoutes],
  },
  {
    path: 'district',
    children: [...districtRoutes],
  },
  {
    path: 'school',
    children: [...schoolRoutes],
  },
  {
    path: 'state',
    children: [...stateRoutes],
  },
  {
    path: 'supplier',
    children: [...supplierRoutes],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
