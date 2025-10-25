import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, firstValueFrom } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private http = inject(HttpClient);

    async getUser() {
        return await firstValueFrom(this.http.get<any>(`http://localhost:8080/api/auth/me`, { withCredentials: true }))
    }

    async isOwner(): Promise<boolean> {
        const user = await this.getUser()
        return user.me.role === "ROLE_OWNER"
    }
    async isAuthenticated(): Promise<boolean> {
        try {
            await this.getUser()
            return true
        } catch {
            return false
        }
    }

    login(data: any) {
        return this.http.post('http://localhost:8080/api/auth/login', data, {withCredentials: true});
    }

    register(data: any) {
        return this.http.post('http://localhost:8080/api/tenants', data, {withCredentials: true});
    }
}
