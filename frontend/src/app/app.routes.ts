import { Routes } from '@angular/router';
import { tokenGuard, ownerGuard, tenantGuard } from './core/guards';
import { NotAuthorized, NotFound } from '@/presentation/pages';

export const routes: Routes = [
    {
        path: 'auth',
        children: [
            {
                path: 'login',
                loadComponent: () =>
                    import('@auth/presentation/pages/login/login').then((m) => m.Login),
            },
            {
                path: 'register',
                canActivate: [tokenGuard],
                loadComponent: () =>
                    import('@auth/presentation/pages/register/register').then((m) => m.Register),
            },
        ],
    },
    {
        path: 'tenant',
        canActivateChild: [tenantGuard],
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full',
            },
            {
                path: 'dashboard',
                loadComponent: () =>
                    import('@tenant/presentation/pages/dashboard/tenant-dashboard').then(
                        (m) => m.TenantDashboard
                    ),
            },
        ],
    },
    {
        path: 'owner',
        canActivateChild: [ownerGuard],
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full',
            },
            {
                path: 'dashboard',
                loadComponent: () =>
                    import('@owner/presentation/pages/dashboard/owner-dashboard').then(
                        (m) => m.OwnerDashboard
                    ),
            },
            {
                path: 'properties',
                loadComponent: () =>
                    import('@owner/presentation/pages/properties/properties').then(
                        (m) => m.Properties
                    ),
            },
            {
                path: 'contracts',
                loadComponent: () =>
                    import('@owner/presentation/pages/contracts/contracts').then(
                        (m) => m.Contracts
                    ),
            },
            {
                path: 'payments',
                loadComponent: () =>
                    import('@owner/presentation/pages/payments/payments').then((m) => m.Payments),
            },
            {
                path: 'maintenance',
                loadComponent: () =>
                    import('@owner/presentation/pages/maintenance/maintenance').then(
                        (m) => m.Maintenance
                    ),
            },
            {
                path: 'tenants',
                loadComponent: () =>
                    import('@owner/presentation/pages/tenants/tenants').then((m) => m.Tenants),
            },
            {
                path: 'reports',
                loadComponent: () =>
                    import('@owner/presentation/pages/reports/reports').then((m) => m.Reports),
            },
            {
                path: 'settings',
                loadComponent: () =>
                    import('@owner/presentation/pages/settings/settings').then((m) => m.Settings),
            },
        ],
    },
    {
        path: 'not-authorized',
        component: NotAuthorized,
    },
    {
        path: '**',
        component: NotFound,
    },
];
