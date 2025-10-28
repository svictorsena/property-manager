import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { ApiService } from './api-service';
import { IUser } from '@/interfaces/IUser';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private api = inject(ApiService);

    async getUser(): Promise<IUser> {
        return await firstValueFrom(this.api.get<IUser>(`auth/me`));
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
        return this.api.post('auth/login', data);
    }

    register(data: any, token: any) {
        return this.api.post('auth/register', {...data, token})
    }

    async validateToken(token: string): Promise<boolean> {
        return await firstValueFrom(this.api.post('invite-token/validate', token));
    }
}
