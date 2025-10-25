import { inject, Injectable } from '@angular/core';
import { ApiService } from '../api/api-service';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private readonly api = inject(ApiService);

    getUser() {
        return this.api.get<any>('auth/me');
      
    }

    // isOwner(): boolean {
    //     return this.getUser().data()?.role === 'OWNER';
    // }

    // isAuthenticated(): boolean {
    //     return !!this.getUser();
    // }

    login(data: any) {
        return this.api.post("auth/login", data)
    }
}
