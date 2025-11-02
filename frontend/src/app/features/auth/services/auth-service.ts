import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private readonly http = inject(HttpClient);

    login(data: any) {
        return this.http.post('auth/login', data);
    }

    registerByTenantInvite(data: any, token: any) {
        return this.http.post('auth/register', {...data, token}).subscribe()
    }

    register(data: any) {
        this.http.post('owner/register-tenant', data)
    }
}
