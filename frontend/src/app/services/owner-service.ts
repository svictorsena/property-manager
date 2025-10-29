import { firstValueFrom } from 'rxjs';
import { inject, Injectable } from '@angular/core';
import { HttpClient
    
 } from '@angular/common/http';
interface IToken {
    token: string,
    expireAt: string
}

@Injectable({
    providedIn: 'root',
})
export class OwnerService {
    private readonly http = inject(HttpClient);

    register(data: any) {
        return this.http.post('owner/register-tenant', data);
    }

    async createInvite(): Promise<IToken> {
        return await firstValueFrom(this.http.post<IToken>('invite-token', {}))
    }
}
