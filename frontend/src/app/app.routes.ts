import { Routes } from '@angular/router';
import { tokenGuard, ownerGuard, tenantGuard } from './core/guards';
import { TenantDashboard } from '@tenant/presentation/pages';
import { NotAuthorized, NotFound } from '@/presentation/pages';
import { Login, Register } from '@auth/presentation/pages';
import {
    Contracts,
    Maintenance,
    OwnerDashboard,
    Payments,
    Properties,
    Settings,
    Reports,
    Tenants,
} from '@owner/presentation/pages';

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
