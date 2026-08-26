import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'de', pathMatch: 'full' },

  ...(['de', 'en', 'ru', 'es'] as const).flatMap((locale) => [
    {
      path: `${locale}/impressum`, data: { locale, page: 'imprint' },
      loadComponent: () => import('./features/legal/legal.component').then((m) => m.LegalComponent),
    },
    {
      path: `${locale}/datenschutz`, data: { locale, page: 'privacy' },
      loadComponent: () => import('./features/legal/legal.component').then((m) => m.LegalComponent),
    },
  ]),

  {
    path: 'de',
    data: { locale: 'de' },
    loadComponent: () => import('./features/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'en',
    data: { locale: 'en' },
    loadComponent: () => import('./features/home/home.component').then((m) => m.HomeComponent),
  },
  { path: 'ru', data: { locale: 'ru' }, loadComponent: () => import('./features/home/home.component').then((m) => m.HomeComponent) },
  { path: 'es', data: { locale: 'es' }, loadComponent: () => import('./features/home/home.component').then((m) => m.HomeComponent) },

  {
    path: 'de/villen/:slug',
    data: { locale: 'de' },
    loadComponent: () => import('./features/villa-detail/villa-detail.component').then((m) => m.VillaDetailComponent),
  },
  {
    path: 'en/villas/:slug',
    data: { locale: 'en' },
    loadComponent: () => import('./features/villa-detail/villa-detail.component').then((m) => m.VillaDetailComponent),
  },
  { path: 'ru/villas/:slug', data: { locale: 'ru' }, loadComponent: () => import('./features/villa-detail/villa-detail.component').then((m) => m.VillaDetailComponent) },
  { path: 'es/villas/:slug', data: { locale: 'es' }, loadComponent: () => import('./features/villa-detail/villa-detail.component').then((m) => m.VillaDetailComponent) },

  {
    path: 'de/lage-budva-riviera',
    data: { locale: 'de' },
    loadComponent: () => import('./features/location/location.component').then((m) => m.LocationComponent),
  },
  {
    path: 'en/location-budva-riviera',
    data: { locale: 'en' },
    loadComponent: () => import('./features/location/location.component').then((m) => m.LocationComponent),
  },
  { path: 'ru/location-budva-riviera', data: { locale: 'ru' }, loadComponent: () => import('./features/location/location.component').then((m) => m.LocationComponent) },
  { path: 'es/location-budva-riviera', data: { locale: 'es' }, loadComponent: () => import('./features/location/location.component').then((m) => m.LocationComponent) },

  {
    path: 'de/reisefuehrer/:slug',
    data: { locale: 'de' },
    loadComponent: () => import('./features/guide-detail/guide-detail.component').then((m) => m.GuideDetailComponent),
  },
  {
    path: 'en/guides/:slug',
    data: { locale: 'en' },
    loadComponent: () => import('./features/guide-detail/guide-detail.component').then((m) => m.GuideDetailComponent),
  },
  { path: 'ru/guides/:slug', data: { locale: 'ru' }, loadComponent: () => import('./features/guide-detail/guide-detail.component').then((m) => m.GuideDetailComponent) },
  { path: 'es/guides/:slug', data: { locale: 'es' }, loadComponent: () => import('./features/guide-detail/guide-detail.component').then((m) => m.GuideDetailComponent) },

  { path: '**', redirectTo: 'de' },
];
