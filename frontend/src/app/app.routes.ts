import { Routes } from '@angular/router';
import { Login } from './features/auth/pages/login/login';
import { Register } from './features/auth/pages/register/register';
import { NotFound } from './core/pages/not-found/not-found';
import { TenantDashboard } from './features/tenant/pages//dashboard/tenant-dashboard';
import { OwnerDashboard } from './features/owner/pages/dashboard/owner-dashboard';
import { ownerGuard } from './core/guards/owner-guard';
import { tenantGuard } from './core/guards/tenant-guard';
import { NotAuthorized } from './core/pages/not-authorized/not-authorized';
import { Properties } from './features/owner/pages/properties/properties';
import { Contracts } from './features/owner/pages/contracts/contracts';
import { Payments } from './features/owner/pages/payments/payments';
import { Maintenance } from './features/owner/pages/maintenance/maintenance';
import { Tenants } from './features/owner/pages/tenants/tenants';
import { Reports } from './features/owner/pages/reports/reports';
import { Settings } from './features/owner/pages/settings/settings';
import { tokenGuard } from './core/guards/token-guard';

export const routes: Routes = [
    {
        path: 'auth',
        children: [
            {
                path: 'login',
                component: Login,
            },
            {
                path: 'register',
                component: Register,
                canActivate: [tokenGuard],
            },
        ],
    },
    {
        path: 'tenant',
        canActivate: [tenantGuard],

        children: [
            {
                path: 'dashboard',
                component: TenantDashboard,
            },
        ],
    },
    {
        path: 'owner',
        canActivate: [ownerGuard],
        children: [
            {
                path: 'dashboard',
                component: OwnerDashboard,
            },
            {
                path: 'properties',
                component: Properties,
            },
            {
                path: 'contracts',
                component: Contracts,
            },
            {
                path: 'payments',
                component: Payments,
            },
            {
                path: 'maintenance',
                component: Maintenance,
            },
            {
                path: 'tenants',
                component: Tenants,
            },

            {
                path: 'reports',
                component: Reports,
            },
            {
                path: 'settings',
                component: Settings,
            },
        ],
    },
    {
        path: 'not-authorized',
        component: NotAuthorized,
    },
    { path: '**', component: NotFound },
];
