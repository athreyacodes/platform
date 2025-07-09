import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'portfolio',
    loadChildren: () => import('portfolio/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: '',
    redirectTo: 'portfolio',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'portfolio',
    pathMatch: 'full',
  },
];
