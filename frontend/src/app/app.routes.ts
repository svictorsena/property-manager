import { Routes } from '@angular/router';
import { Auth } from './pages/auth/auth';
import { Home } from './pages/home/home';

import { RegisterTenant } from './pages/owner/register-tenant/register-tenant';
import { NotFound } from './pages/not-found/not-found';
import { TenantDashboard } from './pages/tenant/dashboard/tenant-dashboard';
import { OwnerDashboard } from './pages/owner/dashboard/owner-dashboard';
import { ownerGuard } from './guards/owner-guard';
import { tenantGuard } from './guards/tenant-guard';

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
        canActivate: [tenantGuard],
        component: TenantDashboard,
    },
    {
        path: 'owner/dashboard',
        canActivate: [ownerGuard],
        component: OwnerDashboard,
    },
    {
        path: 'owner/register-tenant',
        canActivate: [ownerGuard],
        component: RegisterTenant,
    },
    { path: '**', component: NotFound },
];
