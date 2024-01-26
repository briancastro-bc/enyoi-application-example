import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Root from './Root/Root';

const router = createBrowserRouter([
  {
    element: <Root/>,
    children: [
      {
        path: '',
        Component: lazy(() => import('./Home/Home')),
      },
      {
        path: 'dashboard',
        Component: lazy(() => import('./dashboard/Dashboard')),
        children: [
          {
            path: 'characters',
            Component: lazy(() => import('./dashboard/Characters')),
          }
        ]
      },
      {
        path: 'email',
        Component: lazy(() => import('./example/Example'))
      }
    ]
  }
]);

export default router;