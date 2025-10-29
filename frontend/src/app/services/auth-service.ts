import { inject, Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IUser } from '@/interfaces/IUser';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private http = inject(HttpClient);

    async getUser(): Promise<IUser> {
        return await firstValueFrom(this.http.get<IUser>(`auth/me`));
    }

    async isOwner(): Promise<boolean> {
        try {
            const user = await this.getUser();
            return user.role === 'ROLE_OWNER';
        } catch {
            return false;
        }
    }
    async isAuthenticated(): Promise<boolean> {
        try {
            await this.getUser();
            return true;
        } catch {
            return false;
        }
    }

    login(data: any) {
        return this.http.post('auth/login', data);
    }

    register(data: any, token: any) {
        return this.http.post('auth/register', {...data, token})
    }

    async validateToken(token: string): Promise<boolean>  {
        return firstValueFrom(this.http.post<boolean>('invite-token/validate', token))
    }
}
