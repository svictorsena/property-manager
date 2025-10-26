import { Routes } from '@angular/router';
import { Auth } from './pages/auth/auth';
import { Home } from './pages/home/home';
import { RegisterTenant } from './pages/owner/register-tenant/register-tenant';
import { NotFound } from './pages/not-found/not-found';
import { TenantDashboard } from './pages/tenant/dashboard/tenant-dashboard';
import { OwnerDashboard } from './pages/owner/dashboard/owner-dashboard';
import { ownerGuard } from './guards/owner-guard';
import { tenantGuard } from './guards/tenant-guard';
import { NotAuthorized } from './pages/not-authorized/not-authorized';
import { Properties } from './pages/owner/properties/properties';
import { Contracts } from './pages/owner/contracts/contracts';
import { Payments } from './pages/owner/payments/payments';
import { Maintenance } from './pages/owner/maintenance/maintenance';
import { Tenants } from './pages/owner/tenants/tenants';
import { Reports } from './pages/owner/reports/reports';
import { Settings } from './pages/owner/settings/settings';

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
        path: 'owner/properties',
        canActivate: [ownerGuard],
        component: Properties,
    },
    {
        path: 'owner/contracts',
        canActivate: [ownerGuard],
        component: Contracts,
    },
    {
        path: 'owner/payments',
        canActivate: [ownerGuard],
        component: Payments,
    },
    {
        path: 'owner/maintenance',
        canActivate: [ownerGuard],
        component: Maintenance,
    },
    {
        path: 'owner/tenants',
        canActivate: [ownerGuard],
        component: Tenants,
    },
    {
        path: 'owner/register-tenants',
        canActivate: [ownerGuard],
        component: RegisterTenant,
    },
    {
        path: 'owner/reports',
        canActivate: [ownerGuard],
        component: Reports,
    },
    {
        path: 'owner/settings',
        canActivate: [ownerGuard],
        component: Settings,
    },
    {
        path: 'not-authorized',
        component: NotAuthorized,
    },
    { path: '**', component: NotFound },
];
