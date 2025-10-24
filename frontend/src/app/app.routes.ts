import { Routes } from '@angular/router';
import { Auth } from './pages/auth/auth';
import { Home } from './pages/home/home';
import { Dashboard } from './pages/tenant/dashboard/dashboard';
import { RegisterTenant } from './pages/owner/register-tenant/register-tenant';
import { NotFound } from './pages/not-found/not-found';

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
        component: Dashboard,
    },
    {
        path: 'owner/register-tenant',
        component: RegisterTenant,
    },
    { path: '**', component: NotFound },
];
