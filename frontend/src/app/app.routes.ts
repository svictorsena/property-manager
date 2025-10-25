import { Routes } from '@angular/router';
import { Auth } from './pages/auth/auth';
import { Home } from './pages/home/home';

import { RegisterTenant } from './pages/owner/register-tenant/register-tenant';
import { NotFound } from './pages/not-found/not-found';
import { TenantDashboard } from './pages/tenant/dashboard/tenant-dashboard';
import { OwnerDashboard } from './pages/owner/dashboard/owner-dashboard';

export const routes: Routes = [
    {
        path: '',
        component: Home,
    },
    {
        path: 'auth',
        component: Auth,
    },
    {
        path: 'tenant/dashboard',
        component: TenantDashboard,
    },
    {
        path: 'owner/dashboard',
        component: OwnerDashboard,
    },
    {
        path: 'owner/register-tenant',
        component: RegisterTenant,
    },
    { path: '**', component: NotFound },
];
